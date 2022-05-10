import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { removeFromCart } from '../../redux/actions'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const CartTableRow = () => {
  const { nation } = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      {nation?.map((nations) => (
        <TableRow key={nations.name}>
          <TableCell>
            <img
              src={nations.flag}
              style={{ width: '20px', height: '10px' }}
              alt={nations.name + ' Flag'}
            />
          </TableCell>
          <TableCell>{nations.name}</TableCell>
          <TableCell>
            <IconButton aria-label={'delete ' + nations.name}>
              <DeleteIcon
                onClick={() => dispatch(removeFromCart(nations.name))}
              />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default CartTableRow
