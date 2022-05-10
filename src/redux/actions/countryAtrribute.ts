import { Dispatch } from 'redux'

import axios from 'axios'
import {
  CountryAttributeFetchFailureAction,
  CountryAttributeFetchRequestAction,
  CountryAttributeFetchSuccessAction,
  COUNTRY_ATTRIBUTE_FAILURE,
  COUNTRY_ATTRIBUTE_FETCH_REQUEST,
  COUNTRY_ATTRIBUTE_SUCCESS,
} from '../../types'

export function countryAtrributeRequest(): CountryAttributeFetchRequestAction {
  return {
    type: COUNTRY_ATTRIBUTE_FETCH_REQUEST,
  }
}

export function countryAttributeSuccess(
  Name: any
): CountryAttributeFetchSuccessAction {
  return {
    type: COUNTRY_ATTRIBUTE_SUCCESS,
    payload: {
      data: Name,
    },
  }
}

export function countryAttributeFailure(
  error: string
): CountryAttributeFetchFailureAction {
  return {
    type: COUNTRY_ATTRIBUTE_FAILURE,
    payload: {
      err: error,
    },
  }
}

export function countryAttributeFetch(country: string) {
  return async function (dispatch: Dispatch) {
    dispatch(countryAtrributeRequest())
    const url = `https://restcountries.com/v3.1/name/${country}`
    try {
      const countryDta = await axios.get(url)
      if (countryDta.status === 200) {
        dispatch(countryAttributeSuccess(countryDta.data))
      } else {
        throw new Error('There was a connection area')
      }
    } catch (err) {
      if (err instanceof Error) {
        dispatch(countryAttributeFailure(err.message))
      }
    }
  }
}
