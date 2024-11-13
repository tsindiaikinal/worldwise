export interface ICity {
  cityName: string
  country: string
  emoji: string
  date: string
  notes: string
  position: ICoords
  id: number
}

interface ICoords {
  lat: number
  lng: number
}
