import { useRouter } from 'next/router'

const errorMessages: Record<string, string> = {
  OAuthSignin: 'Erro ao iniciar a autenticação OAuth.',
  OAuthCallback: 'Erro no callback da autenticação OAuth.',
  OAuthCreateAccount: 'Erro ao criar conta via OAuth.',
  AccessDenied: 'Acesso negado.',
}

export default function AuthError() {
  const router = useRouter()
  const rawError = router.query.error

  // Garante que error é string simples
  const error = Array.isArray(rawError) ? rawError[0] : rawError ?? ''

  return (
    <div>
      <h1>Erro na autenticação</h1>
      <p>{errorMessages[error] ?? 'Erro desconhecido.'}</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )
}
