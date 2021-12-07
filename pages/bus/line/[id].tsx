import { FC } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { MainWrapper, StepperStyled, StyledMap } from '../../../styles/Components.styles'
import { Params } from 'next/dist/server/router'
import Layout from '../../../app/components/Layout'
import GoogleMaps from '../../../app/components/GoogleMaps'
import { BusLineProps } from '../../../app/types'
import { styled } from '@mui/system'

const Line: FC<BusLineProps> = ({ line }) => {
  const router = useRouter()
  const lineId = router.query.id as string
  const stops = line.stops.edges
  const stopsCoordinates = line.stops.edges[0].node.location.coordinates

  return (
    <MainWrapper>
      <div className="col">
        <StepperStyled orientation="vertical" color={line.color}>
          {stops.map((station: any, index: number) => (
            <Step key={(index + '-' + station.node.id).toString()} className={(index + '-' + station.node.id).toString()}>
              <StepLabel>{station.node.name}</StepLabel>
            </Step>
          ))}
        </StepperStyled>
      </div>      
      <div className="col">
        <h2>Línea {line.id}: <small>{line.name}</small></h2>
        <StyledMap>
          <GoogleMaps stations={stops} color={line.color} />
        </StyledMap>
      </div>
    </MainWrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        busLines {
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

  const paths = data.busLines.edges.map((line: any) => ({
    params: { id: line.node.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}: Params) => {
  const { data } = await client.query({
    query: gql`
      query {
        busLine (
          findBy: {
            id: ${params.id}
            
          }
        ) {
          ...on BusLine {
            id
            name
            color
            originStop {
              id
              name
            }
            endingStop {
              id
              name
            }
            stops {
              edges {
                node {
                  id
                  name
                  location {
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
      }
    `,
  })

  return {
    props: {
      line: data.busLine,
    },
  }
}

export default Line
