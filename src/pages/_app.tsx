import { AppProps } from "next/app"

import { globalStyles } from "../styles/global"

import { Container } from "../styles/pages/app";
import { AppHeader } from "../components/header";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <AppHeader />

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
