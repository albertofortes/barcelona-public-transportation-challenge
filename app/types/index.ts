export interface MetroLinesInterface {
  node: {
    id: number,
    name: string,
    color: string
  }
}

export interface BusLinesInterface {
  node: {
    id: number,
    name: string,
    color: string
  }
}

export interface stopEdges {
  node: {
    id: number
    name: string
    location: {
      coordinates: {
        longitude: number
        latitude: number
      }
    }
  }
}

export interface stationsEdges {
  node: {
    id: number
    name: string
    coordinates: {
      longitude: number
      latitude: number
    }
  }
}

export type HomeProps = {
  metroLines: MetroLinesInterface[],
  busLines: BusLinesInterface[],
  metroStations: stationsEdges[],
  busStops: stopEdges[],
  getLayout: any,
}

export type BusLineProps = {
  line: {
    name: string
    id: number,
    color: string,
    originStop: {
      name: string
    },
    endingStop: {
      name: string
    },
    stops: {
      edges: stopEdges[]
    }
  }
}

export type MetroLineProps = {
  line: {
    name: string,
    color: string,
    originStation: {
      name: string
    },
    endingStation: {
      name: string
    },
    stations: {
      edges: stationsEdges[]
    }
  }
}

export type GoogleMapProps = {
  color?: string,
  stations?: stopEdges[] | stationsEdges[]
}