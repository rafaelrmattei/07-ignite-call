import { useRouter } from 'next/router'
import React from 'react'

const AuthErrorPage: React.FC = () => {
  const router = useRouter()
  const { error } = router.query

  // Mensagens customizadas para cada tipo de erro
  const errorMessages: Record<string, string> = {
    OAuthSignin: 'Erro ao conectar na conta OAuth.',
    OAuthCallback: 'Erro na resposta do OAuth.',
    OAuthCreateAccount: 'Erro ao criar conta OAuth.',
    EmailCreateAccount: 'Erro ao criar conta por e-mail.',
    Callback: 'Erro na autenticação.',
    OAuthAccountNotLinked: 'Essa conta já está vinculada a outro login.',
    EmailSignin: 'Erro ao enviar e-mail de login.',
    CredentialsSignin: 'Credenciais inválidas.',
    default: 'Erro desconhecido. Tente novamente.',
  }

  const message = typeof error === 'string' ? errorMessages[error] ?? errorMessages.default : null

  return (
    <main
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '480px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <h1>Erro na autenticação</h1>
      {message ? <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p> : <p>Ocorreu um erro desconhecido. Tente novamente.</p>}
      <button
        onClick={() => router.push('/')}
        style={{
          marginTop: '1.5rem',
          padding: '0.6rem 1.2rem',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#0070f3',
          color: 'white',
        }}
      >
        Voltar para a página inicial
      </button>
    </main>
  )
}

export default AuthErrorPage
