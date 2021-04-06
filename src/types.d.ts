export interface State {
  id: string
  objectId: string
  nameMmUni: string
  nameMmZawgyi: string
  countryId: string
  createdDate: number
  updatedDate: number
}

export interface Country {
  id: string
  objectId: string
  name: string
  createdDate: number
  updatedDate: number
}

export interface Day {
  id: string
  objectId: string
  day: number
  dayMm: string
  calendarDay: string
  hijariDay: string
  sehriTime: string
  iftariTime: string
  sehriTimeDesc: string
  iftariTimeDesc: string
  sehriTimeDescMmUni: string
  sehriTimeDescMmZawgyi: string
  iftariTimeDescMmZawgyi: string
  iftariTimeDescMmUni: string
  isKadir: boolean
  isEid: boolean
  duaAr: string
  duaEn: string
  duaMmUni: string
  duaMmZawgyi: string
  countryId: string
  stateId: string
  createdDate: number
  updatedDate: number
}
