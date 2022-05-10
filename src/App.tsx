import React from 'react'

import Routes from './Routes'
import CustomThemeProvider from './components/context/ThemeContext'

export default function App() {
  return (
    <>
      <CustomThemeProvider>
        <Routes />
      </CustomThemeProvider>
    </>
  )
}
