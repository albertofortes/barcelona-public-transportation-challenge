import Head from 'next/head'
import Header from './Header'
import { LayoutStyled } from '../../styles/Components.styles'

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Barcelona Public Transportation Challenge</title>
        <meta name="description" content="UserZoom take home test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LayoutStyled>
        <div className="main__wrapper">{children}</div>
      </LayoutStyled>
    </>
  )
}