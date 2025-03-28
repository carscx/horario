import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo, useState } from 'react'
import { IconButton, Box } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SyncIcon from '@mui/icons-material/Sync'
import Horario from './components/Horario'

// type ThemeMode = 'system' | 'light' | 'dark'

export default function App() {
  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState('system')

  const resolvedMode = mode === 'system' ? (systemPrefersDark ? 'dark' : 'light') : mode

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: resolvedMode,
        },
      }),
    [resolvedMode]
  )

  const nextMode = () => {
    setMode((prev) => (prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'))
  }

  const renderIcon = () => {
    if (mode === 'system') return <SyncIcon />
    if (mode === 'light') return <Brightness7Icon />
    return <Brightness4Icon />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 999 }}>
        <IconButton onClick={nextMode} color="inherit" title={`Modo: ${mode}`}>
          {renderIcon()}
        </IconButton>
      </Box>
      <Box sx={{ position: 'relative', top: 86, left: 0, zIndex: 999 }}>
        <Horario />
      </Box>
    </ThemeProvider>
  )
}
