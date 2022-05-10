import React, { createContext, useState } from 'react'

import { createTheme, ThemeProvider } from '@material-ui/core/styles'

type ThemeProps = {
  setMode: any
  mode: boolean
}
export const ThemeContext = createContext({} as ThemeProps)

type ThemeContextProp = {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: ThemeContextProp) => {
  const [mode, setMode] = useState<boolean>(false)
  const theme = createTheme({
    palette: {
      type: mode ? 'dark' : 'light',
      primary: {
        light: mode ? '#90caf9' : '#42a5f5',
        main: mode ? '#212121' : '#1976d2',
        dark: '#002884',
        contrastText: '#fff',
      },
      action: {
        hover: 'rgba(255, 255, 255, 0.08)',
      },
    },
  })
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
