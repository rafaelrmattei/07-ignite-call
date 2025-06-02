// src/pages/auth/error.page.tsx

import { useRouter } from 'next/router'

const errorMessages: Record<string, string> = {
  OAuthSignin: 'Erro ao iniciar a autenticação OAuth.',
  OAuthCallback: 'Erro no callback da autenticação OAuth.',
  OAuthCreateAccount: 'Erro ao criar conta via OAuth.',
  AccessDenied: 'Acesso negado.',
  Configuration: 'Erro de configuração no servidor.',
  Verification: 'Erro ao tentar verificar seu e-mail.',
  Default: 'Ocorreu um erro desconhecido.',
}

export default function AuthErrorPage() {
  const router = useRouter()
  const rawError = router.query.error

  const error = typeof rawError === 'string' ? rawError : Array.isArray(rawError) ? rawError[0] : 'Default'

  const message = errorMessages[error] ?? errorMessages['Default']

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Erro na autenticação</h1>
      <p>{message}</p>
      <p style={{ color: '#999' }}>
        Código do erro: <code>{error}</code>
      </p>
    </main>
  )
}
