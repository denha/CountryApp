import {
  NationState,
  NationActions,
  FETCH_NATION_FAILURE,
  FETCH_NATION_REQUEST,
  FETCH_NATION_SUCCESS,
  FILTER_COUNTRIES,
  SORT_COUNTRY,
} from '../../types'

export default function nation(
  state: NationState = {
    loading: true,
    data: [],
    error: '',
    order: true,
    isError: false,
  },
  action: NationActions
): NationState {
  switch (action.type) {
  case FETCH_NATION_REQUEST: {
    return {
      ...state,
      loading: true,
      isError: false,
    }
  }
  case FETCH_NATION_SUCCESS: {
    const { data } = action.payload
    return {
      ...state,
      loading: false,
      isError: false,
      data: [...state.data, data],
    }
  }
  case FETCH_NATION_FAILURE: {
    const { error, isError } = action.payload
    return {
      ...state,
      loading: false,
      error: error,
      isError: isError,
    }
  }
  case FILTER_COUNTRIES: {
    const { query } = action.payload
    const newQuery = state.data[0]?.filter((data) =>
      data.name.common.toLowerCase().includes(query.toLowerCase())
      )
    return {
      ...state,
      data: [[...newQuery]],
    }
  }
  case SORT_COUNTRY: {
    if (state.order) {
      const newSort = state.data[0]?.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
        )
      return {
        ...state,
        order: false,
        data: [[...newSort]],
      }
    }

    if (!state.order) {
      const newSort = state.data[0]?.sort((b, a) =>
        a.name.common.localeCompare(b.name.common)
        )
      return {
        ...state,
        order: true,
        data: [[...newSort]],
      }
    }
  }
  default:
    return state
  }
}
