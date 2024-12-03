/* eslint-disable no-unused-vars */
import { ICountry } from './country.interface';

export interface ICity extends ICountry {
  cityName: string
  date: string | null | Date
  notes: string
  position: ICoords
  id?: number | string
}

interface ICoords {
  lat: number
  lng: number
}

// Context interfaces
export interface ICitiesContext {
  cities: ICity[]
  currentCity: ICity
  getCity: (id: string | number) => void
  postNewCity: (newCity: ICity) => void
  deleteCity: (id: string | number) => void
  isLoading: boolean
  error: string
}
