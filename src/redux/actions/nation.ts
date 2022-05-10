import { Dispatch } from 'redux'
import axios from 'axios'

import {
  FETCH_NATION_FAILURE,
  FETCH_NATION_REQUEST,
  FETCH_NATION_SUCCESS,
  FetchNationFailureAction,
  FetchNationRequestAction,
  FetchNationSuccessAction,
  ErrorProp,
  isError,
} from '../../types'

export function fetchNationRequest(): FetchNationRequestAction {
  return {
    type: FETCH_NATION_REQUEST,
  }
}

export function fetchNationSuccess(LoadedData: any): FetchNationSuccessAction {
  return {
    type: FETCH_NATION_SUCCESS,
    payload: {
      data: LoadedData,
    },
  }
}

export function fetchNationFailure(
  error: ErrorProp,
  iserror: isError
): FetchNationFailureAction {
  return {
    type: FETCH_NATION_FAILURE,
    payload: {
      error: error,
      isError: iserror,
    },
  }
}

export function fetchNations() {
  return async function (dispatch: Dispatch) {
    dispatch(fetchNationRequest())
    try {
      const countryResponse = await axios.get(
        'https://restcountries.com/v3.1/all'
      )
      if (countryResponse.status === 200) {
        dispatch(fetchNationSuccess(countryResponse.data))
      } else {
        throw new Error('There is a problem connecting to the server')
      }
    } catch (err) {
      if (err instanceof Error) {
        dispatch(fetchNationFailure(err.message, true))
      }
    }
  }
}
