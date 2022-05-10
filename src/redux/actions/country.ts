import {
  OPEN_DRAWER,
  OpenDrawerAction,
  IsOpen,
  ADD_TO_CART,
  Country,
  AddToCartActions,
  REMOVE_COUNTRY,
  DeleteCountryActions,
  Name,
  Query,
  filterCountryAction,
  FILTER_COUNTRIES,
  SortCountryAction,
  SORT_COUNTRY,
} from '../../types'

export function openDrawer(isOpen: IsOpen): OpenDrawerAction {
  return {
    type: OPEN_DRAWER,
    payload: {
      isOpen,
    },
  }
}

export function addToCart(country: Country): AddToCartActions {
  return {
    type: ADD_TO_CART,
    payload: {
      country: country,
    },
  }
}

export function removeFromCart(name: Name): DeleteCountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      name: name,
    },
  }
}

export function filterCountry(query: Query): filterCountryAction {
  return {
    type: FILTER_COUNTRIES,
    payload: {
      query: query,
    },
  }
}

export function sortCountry(): SortCountryAction {
  return {
    type: SORT_COUNTRY,
  }
}
