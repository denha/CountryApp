import { CountryState, CountryActions, OPEN_DRAWER } from '../../types'

export default function country(
  state: CountryState = {
    isOpen: false,
    nation: [],
  },
  action: CountryActions
): CountryState {
  switch (action.type) {
  case OPEN_DRAWER: {
    const { isOpen } = action.payload
    return { ...state, isOpen: isOpen }
  }
  default:
    return state
  }
}
