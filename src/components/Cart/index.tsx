import React from 'react'
import { useDispatch } from 'react-redux'

import Drawar from '../Drawer'
import { openDrawer } from '../../redux/actions'
import { Box, Badge } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'

const Cart = () => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Box component="div">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartRoundedIcon
            aria-label="shopping cart"
            onClick={() => dispatch(openDrawer(true))}
          />
        </Badge>
      </Box>
      <Drawar></Drawar>
    </React.Fragment>
  )
}

export default Cart
