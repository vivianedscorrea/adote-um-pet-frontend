import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material' /* vai disponibilizar as variaveis lá do tema. Tamanho de fonte, cores... para o projeto inteiro */
import tema from '../ui/themes/tema'
import Cabecalho from '../ui/components/Cabecalho/Cabecalho';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={tema} >
    <Cabecalho/>
    <Component {...pageProps} />
  </ThemeProvider> 
  )
}

export default MyApp
