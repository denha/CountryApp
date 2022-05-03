import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { openDrawer } from '../../redux/actions'
import { Drawer, Box, Typography } from '@material-ui/core'

const Drawar = () => {
  const dispatch = useDispatch()
  const countries = useSelector((state: AppState) => state.country.isOpen)
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={countries}
        onClose={() => dispatch(openDrawer(false))}
      >
        <Box width="250px" textAlign="center" role="presentation">
          <Typography variant="h6">Cart</Typography>
        </Box>
      </Drawer>
    </React.Fragment>
  )
}

export default Drawar
