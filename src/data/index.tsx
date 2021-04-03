import * as React from 'react'

import { useApiReducer } from '../api'
import { Country, Day, State } from '../types'
import db from '../utils/db'

export const getCountry = (limit: number, page: number) => {
  return `{  countries(limit: ${limit}, page: ${page}) {    data {      id      objectId      name      createdDate
 updatedDate    }  }}`
}

export const getStates = (limit: number, page: number, countryId: string) => {
  return `{  states(limit:  ${limit} , page:  ${page}, countryId:  "${countryId}") {    data {      id      objectId      nameMmUni      nameMmZawgyi
    countryId      createdDate      updatedDate    }  }}`
}

export const getSingleDay = (dayId: string) => {
  return `{  day(dayId: "${dayId}") {    id    objectId    day    dayMm    calendarDay
    hijariDay    sehriTime    iftariTime    sehriTimeDesc    iftariTimeDesc    sehriTimeDescMmUni    sehriTimeDescMmZawgyi    iftariTimeDescMmZawgyi iftariTimeDescMmUni    isKadir    duaAr    duaEn    duaMmUni  duaMmZawgyi    countryId    stateId    createdDate    updatedDate      }}`
}

export const getDays = (limit: number, page: number, stateId: string) => {
  return `{  days(limit: ${limit}, page: ${page}, stateId: "${stateId}") {    data {    id    objectId    day    dayMm    calendarDay
    hijariDay    sehriTime    iftariTime    sehriTimeDesc    iftariTimeDesc    sehriTimeDescMmUni    sehriTimeDescMmZawgyi    iftariTimeDescMmZawgyi iftariTimeDescMmUni    isKadir    duaAr    duaEn    duaMmUni  duaMmZawgyi    countryId    stateId    createdDate    updatedDate    }  }}`
}

export const saveCountry = async (country: Country) => {
  const indexdb = db as any
  try {
    await indexdb.country.bulkAdd(country || [])
  } catch {}
  return country
}
export const saveStates = async (states: State[]) => {
  const indexdb = db as any
  try {
    await indexdb.states.bulkAdd(states || [])
  } catch {}
  return states
}

const dayFilter = (days: Day[], enabled?: boolean) =>
  enabled
    ? days.filter((item: any) => {
        return (
          new Date(item.calendarDay.split('/')[0], item.calendarDay.split('/')[1] - 1, item.calendarDay.split('/')[2])
            .addDays(1)
            .getTime() >= new Date().getTime() &&
          new Date(
            item.calendarDay.split('/')[0],
            item.calendarDay.split('/')[1] - 1,
            item.calendarDay.split('/')[2],
          ).getTime() < new Date().addDays(365).getTime()
        )
      })
    : days

export const saveTimeTableDays = async (days: Day[]) => {
  const indexdb = db as any
  try {
    await indexdb.days.bulkAdd(days)
  } catch {}

  return dayFilter(days)
}
export const saveTimeTableDay = async (day: Day) => {
  const indexdb = db as any

  try {
    const result = await indexdb.table('days').where('objectId').equals(day.objectId).toArray()
    if (result.length === 0) {
      await indexdb.days.add(day)
    }
  } catch {}

  return day
}

export const GetTimeTableDays = (stateId: string) => {
  const indexdb = db as any
  const initialState = { loading: true, data: [] }
  const reducer = (state: ApiReducerType = initialState, action: ApiActionType): ApiReducerType => {
    switch (action.type) {
      case 'loading':
        return { ...state, loading: true, data: [] }
      case 'success':
        return { ...state, loading: false, data: action.data }
      case 'error':
        return { ...state, loading: false, data: [], error: action.error?.message }
      default:
        return initialState
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { data } = useApiReducer(`http://localhost:5000/api?query=${getDays(200, 1, stateId)}`)

  React.useEffect(() => {
    const queryData = async () => {
      try {
        dispatch({
          type: 'loading',
          data: [],
        })
        const days = await indexdb.table('days').where('stateId').equals(stateId).sortBy('day')

        if (days && days.length >= 30) {
          dispatch({
            type: 'success',
            data: dayFilter(days),
          })
        } else {
          dispatch({
            type: 'success',
            data: await saveTimeTableDays(data?.data.days.data || []),
          })
        }
      } catch (e) {
        dispatch({
          type: 'error',
          error: e,
        })
      }
    }
    queryData()
  }, [data?.data.days.data, indexdb, stateId])
  return state
}

export const GetStates = (countryId: string) => {
  const indexdb = db as any
  const initialState = { loading: true, data: [] }
  const reducer = (state: ApiReducerType = initialState, action: ApiActionType): ApiReducerType => {
    switch (action.type) {
      case 'loading':
        return { ...state, loading: true, data: [] }
      case 'success':
        return { ...state, loading: false, data: action.data }
      case 'error':
        return { ...state, loading: false, data: null, error: action.error?.message }
      default:
        return initialState
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { data } = useApiReducer(`http://localhost:5000/api?query=${getStates(200, 1, countryId)}`)

  React.useEffect(() => {
    const queryData = async () => {
      dispatch({
        type: 'loading',
        data: [],
      })
      const states = await indexdb.table('states').where('countryId').equals(countryId)

      if (states && states.length > 0) {
        dispatch({
          type: 'success',
          data: states,
        })
      } else {
        dispatch({
          type: 'success',
          data: await saveStates(data?.data.states.data || []),
        })
      }
    }
    queryData()
  }, [data, indexdb, countryId])
  return state
}

export const GetSingleDay = (dayId: string) => {
  const indexdb = db as any
  const initialState = { loading: true, data: null }
  const reducer = (state: ApiReducerType = initialState, action: ApiActionType): ApiReducerType => {
    switch (action.type) {
      case 'loading':
        return { ...state, loading: true, data: null }
      case 'success':
        return { ...state, loading: false, data: action.data }
      case 'error':
        return { ...state, loading: false, data: null, error: action.error?.message }
      default:
        return initialState
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { data } = useApiReducer(`http://localhost:5000/api?query=${getSingleDay(dayId)}`)

  React.useEffect(() => {
    const queryData = async () => {
      dispatch({
        type: 'loading',
      })
      const states = await indexdb.table('days').where('objectId').equals(dayId).toArray()

      if (states && states.length > 0) {
        dispatch({
          type: 'success',
          data: states[0],
        })
      } else {
        dispatch({
          type: 'success',
          data: await saveTimeTableDay(data?.data.day),
        })
      }
    }
    queryData()
  }, [data, indexdb, dayId])
  return state
}

export const GetCountries = () => {
  const indexdb = db as any
  const initialState = { loading: true, data: [] }
  const reducer = (state: ApiReducerType = initialState, action: ApiActionType): ApiReducerType => {
    switch (action.type) {
      case 'loading':
        return { ...state, loading: true, data: [] }
      case 'success':
        return { ...state, loading: false, data: action.data }
      case 'error':
        return { ...state, loading: false, data: [], error: action.error?.message }
      default:
        return initialState
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { data } = useApiReducer(`http://localhost:5000/api?query=${getCountry(200, 1)}`)

  React.useEffect(() => {
    const queryData = async () => {
      dispatch({
        type: 'loading',
        data: [],
      })
      const countries = await indexdb.table('country').toArray()

      if (countries && countries.length > 0) {
        dispatch({
          type: 'success',
          data: countries,
        })
      } else {
        dispatch({
          type: 'success',
          data: await saveCountry(data?.data.countries.data || []),
        })
      }
    }
    queryData()
  }, [data, indexdb])
  return state
}
