import { FC, useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapMarkerStyle } from '../../styles/Components.styles'
import { GoogleMapProps } from '../types'


const MapMarker: FC<any> = ({text, color}) => {
  return (
    <MapMarkerStyle color={color}>
      {text}
    </MapMarkerStyle>
  )
}

const GoogleMap: FC<GoogleMapProps> = ({stations, color}) => {
  const [ mapState, setMapState ] = useState<any>({
    center: { // Plaza Catalunya
      lat: 41.3870154,
      lng: 2.1678584
    },
    zoom: 12
  })

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDhRnN-jSjamFR1fWNPOq6AFyNvVPGVgNM' }}
      defaultCenter={mapState.center}
      defaultZoom={mapState.zoom}>
        {stations && stations.map((station: any, index: number) => {
          const lat: number = (station.node.location !== undefined) ? station.node.location.coordinates.latitude : station.node.coordinates.latitude
          const lng: number = (station.node.location !== undefined) ? station.node.location.coordinates.longitude : station.node.coordinates.longitude
          return <MapMarker key={(index + '-' + station.node.id).toString()} lat={lat} lng={lng} text={station.node.name} color={color} />
        })}
    </GoogleMapReact>
  )
}

export default GoogleMap