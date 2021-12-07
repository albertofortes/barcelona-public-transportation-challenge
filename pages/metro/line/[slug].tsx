import { FC } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { MainWrapper, StepperStyled, StyledMap } from '../../../styles/Components.styles'
import { Params } from 'next/dist/server/router'
import Layout from '../../../app/components/Layout'
import GoogleMaps from '../../../app/components/GoogleMaps'
import { styled } from '@mui/system'
import { MetroLineProps } from '../../../app/types'

const Line: FC<MetroLineProps> = ({ line }) => {
  const router = useRouter()
  const lineSlug = router.query.slug as string // const { country } = router.query
  const stations = line.stations.edges

  return (
    <MainWrapper>
      <div className="col">
        <StepperStyled orientation="vertical" color={line.color}>
          {stations.map((station: any) => (
            <Step key={station.node.id}>
              <StepLabel>{station.node.name}</StepLabel>
            </Step>
          ))}
        </StepperStyled>
      </div>      
      <div className="col">
        <h2>Línea {line.name}: <small>{line.originStation.name} a {line.endingStation.name}</small></h2>
        <StyledMap>
          <GoogleMaps stations={stations} color={line.color} />
        </StyledMap>
      </div>
    </MainWrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        metroLines {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
  })

  const paths = data.metroLines.edges.map((line: any) => ({
    params: { slug: line.node.name.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}: Params) => {
  const { data } = await client.query({
    query: gql`
      query {
        metroLine (
          findBy: {
            name: "${params.slug}"
            
          }
        ) {
          ...on MetroLine {
            id
            name
            color
            originStation {
              id
              name
            }
            endingStation {
              id
              name
            }
            stations {
              edges {
                node {
                  id
                  name
                  coordinates {
                    longitude
                    latitude
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      line: data.metroLine,
    },
  }
}

export default Line
