import {
  CartState,
  CartAction,
  OPEN_DRAWER,
  ADD_TO_CART,
  REMOVE_COUNTRY,
} from '../../types'

export default function country(
  state: CartState = {
    isOpen: false,
    nation: [],
  },
  action: CartAction
): CartState {
  switch (action.type) {
  case OPEN_DRAWER: {
    const { isOpen } = action.payload
    return { ...state, isOpen: isOpen }
  }
  case ADD_TO_CART: {
    const { country } = action.payload
    return {
      ...state,
      nation: [...state.nation, country],
    }
  }
  case REMOVE_COUNTRY: {
    const { name } = action.payload
    const countryIndex = state.nation.findIndex(
      (country) => country.name === name
    )
    if (countryIndex >= 0) {
      state.nation.splice(countryIndex, 1)
      return {
        ...state,
        nation: [...state.nation],
      }
    }
    return state
  }
  default:
    return state
  }
}
