import client from '@/lib/apolloClient'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import {
  DarkMode,
  DarkModeOutlined,
  LightMode,
  LightModeOutlined,
} from '@mui/icons-material'

import { Box, Button, CssBaseline, PaletteMode, useTheme } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import * as React from 'react'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            background: {
              default: '#fff',
            },
            text: {
              primary: '#313234',
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: '#000000',
            },
            text: {
              primary: '#fff',
            },
          }),
    },
  })

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#11B0C8', // Substitua pela cor primária desejada
          },
          mode, // Isso definirá o modo de acordo com a variável mode
          ...(mode === 'light'
            ? {
                // Configurações de cores para o modo claro
                background: {
                  default: '#fff',
                },
                text: {
                  primary: '#313234',
                },
              }
            : {
                // Configurações de cores para o modo escuro
                background: {
                  default: '#000000',
                },
                text: {
                  primary: '#fff',
                },
              }),
        },
        typography: {
          fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
        },
      }),
    [mode],
  )

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ApolloProvider>
  )
}

export function ThemeBtn() {
  const theme = useTheme()
  const [selectedMode, setSelectedMode] = React.useState('light') // Inicializado com 'light'

  const colorMode = React.useContext(ColorModeContext)

  return (
    <>
      <Box display={'flex'} gap={1}>
        <Button
          sx={{
            borderRadius: 5,
            textTransform: 'initial',
            color: selectedMode === 'dark' ? 'white' : '#313234',
            backgroundColor:
              selectedMode === 'dark'
                ? theme.palette.primary.main
                : 'transparent',
            '&:hover': {
              backgroundColor:
                selectedMode === 'dark'
                  ? theme.palette.primary.dark
                  : 'transparent',
            },
          }}
          variant={selectedMode === 'dark' ? 'contained' : 'text'}
          startIcon={
            selectedMode === 'dark' ? <DarkMode /> : <DarkModeOutlined />
          }
          onClick={() => {
            if (selectedMode !== 'dark') {
              setSelectedMode('dark') // Ativa o modo escuro
              colorMode.toggleColorMode()
            }
          }}
        >
          Escuro
        </Button>
        <Button
          sx={{
            borderRadius: 5,
            textTransform: 'initial',
            color: selectedMode === 'light' ? 'white' : 'theme.palette.text',
            backgroundColor:
              selectedMode === 'light'
                ? theme.palette.primary.main
                : 'transparent',
            '&:hover': {
              backgroundColor:
                selectedMode === 'light'
                  ? theme.palette.primary.dark
                  : 'transparent',
            },
          }}
          startIcon={
            selectedMode === 'light' ? <LightMode /> : <LightModeOutlined />
          }
          variant={selectedMode === 'light' ? 'contained' : 'text'}
          onClick={() => {
            if (selectedMode !== 'light') {
              setSelectedMode('light')
              colorMode.toggleColorMode()
            }
          }}
        >
          Claro
        </Button>
      </Box>
    </>
  )
}
