import type, { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import '../styles/globals.css'
import '../styles/mui-overrides.scss'
import type { AppProps } from 'next/app'
import client from '../apollo-client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Layout from '../app/components/Layout'

type NextPageWithLayout = NextPage & {
  pageProps: any,
  Component: NextPage & { layout: typeof Layout }
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: NextPageWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
