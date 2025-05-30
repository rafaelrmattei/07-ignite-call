// Esta página não tem o .page.tsx para não criar a rota http://localhost:3000/home.
// Ela é importada em pages/index.page.tsc para ser a página principal

import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>

          <Text size="xl">Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image src={previewImage} height={400} quality={100} alt="Calendário simbolizando aplicação em funcionamento" priority />
        </Preview>
      </Container>
    </>
  )
}
