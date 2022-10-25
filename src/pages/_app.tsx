import { AppProps } from "next/app"
import Image from 'next/image'

import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
