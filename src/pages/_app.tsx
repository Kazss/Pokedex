import { AppProps } from 'next/app';
import Head from 'next/head';
import { PokemonProvider } from '../containers/PokemonProvider';
import { GlobalStyle } from '../styles/global';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PokemonProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </PokemonProvider>

    </>
  )
}


