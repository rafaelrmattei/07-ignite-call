import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import { PrismaAdapter } from '../../../lib/auth/prisma-adapter'

export function buildNextAuthOptions(req: NextApiRequest | NextPageContext['req'], res: NextApiResponse | NextPageContext['res']): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res), //Adapter criado do zero para fins de estudo e porque é diferente do padrão do next auth
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            //Pego no google - urls de escopos exigidos pela nossa aplicação que são necessários autorização
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
            //Pro google enviar o refreshtoken para atualizar o acesso do usuário
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
          },
        },
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            username: '',
            email: profile.email,
            avatar_url: profile.picture,
          }
        },
      }),
    ],
    callbacks: {
      // Verifica o retorno do google pra ver se o usuário autorizou o uso do calendário
      async signIn({ account }) {
        if (!account?.scope?.includes('https://www.googleapis.com/auth/calendar')) {
          return '/register/connect-calendar/?error=permissions'
        }

        return true //Se der erro manda pra connect-calendar com error=permissions, senão retorna que está tudo certo
      },
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
