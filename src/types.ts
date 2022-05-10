// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'
export const FETCH_NATION_REQUEST = 'FETCH_NATION_REQUEST'
export const FETCH_NATION_SUCCESS = 'FETCH_NATION_SUCCESS'
export const FETCH_NATION_FAILURE = 'FETCH_NATION_FAILURE'
export const CHANGE_ORDER = 'CHANGE_ORDER'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const SORT_COUNTRY = 'SORT_COUNTRY'
export const COUNTRY_ATTRIBUTE_FETCH_REQUEST = 'COUNTRY_ATTRIBUTE_FETCH_REQUEST'
export const COUNTRY_ATTRIBUTE_SUCCESS = 'COUNTRY_ATTRIBUTE_SUCCESS'
export const COUNTRY_ATTRIBUTE_FAILURE = 'COUNTRY_ATTRIBUTE_FAILURE'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type Country = {
  name: string
  flag: string
}
// A country
export type CartState = {
  isOpen: boolean
  nation: Country[]
}

export type IsOpen = boolean

export type OpenDrawerAction = {
  type: typeof OPEN_DRAWER
  payload: {
    isOpen: IsOpen
  }
}
// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  cart: CartState
  nation: NationState
  countryAttribute: CountryAtributeState
}
export type CountryAtributeState = {
  loading: boolean
  data: Nation[]
  error: ErrorProp
}
export type SearchProp = {
  query: string
}

export type Language = {
  [name: string]: string
}

export type Nation = {
  flags: {
    png: string
  }
  capital: string
  name: {
    common: string
  }
  languages: Language
  population: number
  region: string
}[]

export type NationState = {
  loading: boolean
  data: Nation[]
  isError: boolean
  error: ErrorProp
  order: boolean
}

export type ErrorProp = unknown | string
export type isError = boolean

export type Loading = boolean

export type FetchNationRequestAction = {
  type: typeof FETCH_NATION_REQUEST
}

export type FetchNationSuccessAction = {
  type: typeof FETCH_NATION_SUCCESS
  payload: {
    data: Nation
  }
}

export type FetchNationFailureAction = {
  type: typeof FETCH_NATION_FAILURE
  payload: {
    error: ErrorProp
    isError: boolean
  }
}
export type Query = string

export type filterCountryAction = {
  type: typeof FILTER_COUNTRIES
  payload: {
    query: Query
  }
}

export type NationActions =
  | FetchNationFailureAction
  | FetchNationRequestAction
  | FetchNationSuccessAction
  | filterCountryAction
  | SortCountryAction

export type AddToCartActions = {
  type: typeof ADD_TO_CART
  payload: {
    country: Country
  }
}

export type DeleteCountryActions = {
  type: typeof REMOVE_COUNTRY
  payload: {
    name: string
  }
}

export type Name = string

export type CartAction =
  | OpenDrawerAction
  | AddToCartActions
  | DeleteCountryActions

export type SortCountryAction = {
  type: typeof SORT_COUNTRY
}

export type CountryAttributeActions =
  | CountryAttributeFetchFailureAction
  | CountryAttributeFetchRequestAction
  | CountryAttributeFetchSuccessAction

export type CountryAttributeFetchRequestAction = {
  type: typeof COUNTRY_ATTRIBUTE_FETCH_REQUEST
}

export type CountryAttributeFetchSuccessAction = {
  type: typeof COUNTRY_ATTRIBUTE_SUCCESS
  payload: {
    data: Nation
  }
}

export type CountryAttributeFetchFailureAction = {
  type: typeof COUNTRY_ATTRIBUTE_FAILURE
  payload: {
    err: any
  }
}
