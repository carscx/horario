import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Horario from './components/Horario'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Horario />
    </ThemeProvider>
  )
}
