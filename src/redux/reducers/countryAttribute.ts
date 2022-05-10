import {
  CountryAttributeActions,
  CountryAtributeState,
  COUNTRY_ATTRIBUTE_FAILURE,
  COUNTRY_ATTRIBUTE_FETCH_REQUEST,
  COUNTRY_ATTRIBUTE_SUCCESS,
} from '../../types'

export default function countryAttribute(
  state: CountryAtributeState = { loading: true, data: [], error: '' },
  action: CountryAttributeActions
): CountryAtributeState {
  switch (action.type) {
  case COUNTRY_ATTRIBUTE_FETCH_REQUEST: {
    return {
      ...state,
      loading: true,
    }
  }
  case COUNTRY_ATTRIBUTE_SUCCESS: {
    const { data } = action.payload
    return {
      ...state,
      loading: false,
      data: [data],
    }
  }
  case COUNTRY_ATTRIBUTE_FAILURE: {
    const { err } = action.payload
    return {
      ...state,
      loading: false,
      error: err,
    }
  }
  default:
    return state
  }
}
