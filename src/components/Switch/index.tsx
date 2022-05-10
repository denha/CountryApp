import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import { Switch } from '@material-ui/core'

const Switcher = () => {
  const { mode, setMode } = useContext(ThemeContext)
  return (
    <React.Fragment>
      <Switch
        name="checkedA"
        checked={mode}
        onChange={() => setMode(!mode)}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </React.Fragment>
  )
}

export default Switcher
