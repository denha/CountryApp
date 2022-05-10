import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import cart from './cart'
import nation from './nation'
import countryAttribute from './countryAttribute'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    cart,
    nation,
    countryAttribute,
  })

export default createRootReducer
