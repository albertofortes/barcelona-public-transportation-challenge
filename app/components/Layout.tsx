import Head from 'next/head'
import Header from './Header'
import { LayoutStyled } from '../../styles/Components.styles'

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Barcelona Public Transportation Challenge</title>
        <meta name="description" content="UserZoom take home test" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Header />
      <LayoutStyled>
        <div className="main__wrapper">{children}</div>
      </LayoutStyled>
    </>
  )
}