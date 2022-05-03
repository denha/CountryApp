import React from 'react'

import { Switch } from '@material-ui/core'

const Switcher = () => {
  return (
    <React.Fragment>
      <Switch
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </React.Fragment>
  )
}

export default Switcher
