import type { AppProps } from 'next/app'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Layout } from 'components'
import 'focus-visible'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
