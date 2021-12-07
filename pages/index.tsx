import { FC, ReactElement, ReactNode, useState } from 'react'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import { GetStaticProps, NextPage } from 'next'
import { styled } from '@mui/system'
import { Box, Tab, Tabs } from '@mui/material'
import Layout from '../app/components/Layout'
import BusLines from '../app/components/BusLines'
import MetroLines from '../app/components/MetroLines'
import StationSelector from '../app/components/StationSelector'
import GoogleMaps from '../app/components/GoogleMaps'
import { HomeProps } from '../app/types'
import { MainWrapper, StyledMap, TabsHomeStyled } from '../styles/Components.styles'

type PageWithLayoutType = NextPage & { layout: typeof Layout }

interface TabPanelProps {
  children: any
  index: number
  value: number
}

const TabPanel: FC<TabPanelProps> = ({children, index, value}) => {
  return (
    <>
      {value === index && children}
    </>
  )
}

const Home: FC<HomeProps> = ({ metroLines, busLines, metroStations, busStops }) => {
  const [tab, setTab] = useState<number>(0);
  const stopsAndstations = [...metroStations, ...busStops]

  const handleTabChange = (e: React.SyntheticEvent, tab: number) => setTab(tab);

  return (
    <MainWrapper>
      <div className="col">
        <StationSelector stopsAndstations={stopsAndstations} />

        <TabsHomeStyled
          value={tab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Bus" />
          <Tab label="Metro" />
          <Tab label="Bicis" disabled />
        </TabsHomeStyled>

        <TabPanel value={tab} index={0}>
          <BusLines lines={busLines} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <MetroLines lines={metroLines} />
        </TabPanel>
      </div>
        
      <div className="col">
          <h2>Mapa bus y metro de Barcelona</h2>
          <p>Planifica tu recorrido consultando el mapa actualizado de las líneas de autobús.</p>
         <StyledMap>
          <GoogleMaps />
        </StyledMap>
      </div>      
    </MainWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        metroLines {
          edges {
            node {
              id
              name
              color
            }
          }
        }
        busLines {
          edges {
            node {
              id
              name
              color
            }
          }
        }
        metroStations: metroStations{
          edges {
            node {
              id
              name
              lines
            }
          }
        }
        busStops: busStops{
          edges {
            node {
              id
              name
              location {
                address
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      metroLines: data.metroLines.edges,
      busLines: data.busLines.edges,
      busStops: data.busStops.edges,
      metroStations: data.metroStations.edges,
    },
 }
}

(Home as PageWithLayoutType).layout = Layout

export default Home
