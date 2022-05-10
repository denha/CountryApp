import React from 'react'

import Search from '../../components/Search'
import Cart from '../../components/Cart'
import Switcher from '../../components/Switch'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { PublicOutlined } from '@material-ui/icons'
//import { ThemeContext } from '../../components/context/ThemeContext'

const Header = () => {
  return (
    <Box component="header" className="header">
      <AppBar position="static">
        <Toolbar className="header__toolbar">
          <div className="header__logo">
            <IconButton
              size="medium"
              color="inherit"
              aria-label="world map logo"
            >
              <PublicOutlined></PublicOutlined>
            </IconButton>
            <Typography variant="h6" component="h1">
              WORLD APP
            </Typography>
          </div>

          <Search></Search>
          <div className="header__iconGroup">
            <Cart></Cart>
            <Switcher />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
