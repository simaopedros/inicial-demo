import { NextPage } from 'next'
import '../styles/globals.css'
import { Component, ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}


type AppPropsWithLayout = AppProps &{
    Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout ) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout( <Component {...pageProps} /> )

}


export default App