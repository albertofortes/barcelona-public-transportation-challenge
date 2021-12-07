import { FC } from 'react'
import Link from 'next/link'
import { styled } from '@mui/system'
import { formatStringUrl } from '../utils/utils'
import { MetroLinesInterface } from '../types'
import { LinesWrapper, BusBoxWrapper } from '../../styles/Components.styles'


type Props = {
  lines: MetroLinesInterface[]
}

const MetroLines: FC<Props> = ({ lines }) => {
  const linesSorted = lines.slice().sort((a, b) => a.node.id - b.node.id)
  
  return (
    <>
      <LinesWrapper>
        {linesSorted.map((line: any) => (
          <BusBoxWrapper key={line.node.id} color={line.node.color}>
            <Link href={{ 
              pathname: `/bus/line/[id]`,
              query: { id: line.node.id }
            }}>{(line.node.id).toString()}</Link>
          </BusBoxWrapper>
        ))}
      </LinesWrapper>
    </>
  )
}

export default MetroLines
