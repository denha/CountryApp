import React from 'react'

import { Table, TableContainer, TableBody } from '@material-ui/core'
import CartTableRow from '../CartTableRow/CartTableRow'

const CartTable = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            <CartTableRow></CartTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default CartTable
