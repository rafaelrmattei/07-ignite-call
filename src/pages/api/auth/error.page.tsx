import { useRouter } from 'next/router'

export default function AuthErrorPage() {
  const { query } = useRouter()

  return (
    <div style={{ padding: 32 }}>
      <h1>Erro ao fazer login</h1>
      {query?.error && <p>Tipo de erro: {query.error}</p>}
      <p>Tente novamente ou entre em contato com o suporte.</p>
    </div>
  )
}
