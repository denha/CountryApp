// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type Country = {
  id: number
  name: string
  flag: string
  isPresent: boolean
}
// A country
export type CountryState = {
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

export type CountryActions = OpenDrawerAction

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
  country: CountryState
}

export type SearchProp = {
  query: string
}
