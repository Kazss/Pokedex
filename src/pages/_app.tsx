import { AppProps } from 'next/app';
import { PokemonProvider } from '../containers/PokemonProvider';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <PokemonProvider>
          <GlobalStyle />
          <Component toggleTheme={toggleTheme} {...pageProps} />
        </PokemonProvider>
      </ThemeProvider>
    </>
  )
}


