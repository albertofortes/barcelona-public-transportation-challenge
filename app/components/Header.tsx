import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderWrapper } from '../../styles/Components.styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
      <Link href="/"><a><Image src="/images/logo_TMB.png" alt="Logo de Transportes Metropolitanos de Barcelona" layout="fill" objectFit="cover" /></a></Link>
      </div>
      <h1>Barcelona Public Transportation Challenge</h1>
    </HeaderWrapper>
  )
}

export default Header