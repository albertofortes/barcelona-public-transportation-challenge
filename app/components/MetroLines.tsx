import { FC } from 'react'
import Link from 'next/link'
import { styled } from '@mui/system'
import { formatStringUrl } from '../utils/utils'
import { MetroLinesInterface } from '../types'
import { LinesWrapper, LineBoxWrapper } from '../../styles/Components.styles'

type Props = {
  lines: MetroLinesInterface[]
}

const MetroLines: FC<Props> = ({ lines }) => {
  const linesSorted = lines.slice().sort((a, b) => a.node.name.localeCompare(b.node.name, undefined, {numeric: true, sensitivity: 'base'}))
  
  return (
    <>
      <LinesWrapper>
        {linesSorted.map((station: any) => (
          <LineBoxWrapper key={station.node.id} color={station.node.color}>
            <Link href={{ 
              pathname: `/metro/line/[slug]`,
              query: { slug: station.node.name }
            }}>{station.node.name}</Link>
          </LineBoxWrapper>
        ))}
      </LinesWrapper>
    </>
  )
}

export default MetroLines
