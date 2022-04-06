import { createTheme } from '@mui/material';
import { cyan, indigo } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0099CC',
      dark: cyan['A700'],
      light: cyan[200],
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#091C48',
      dark: indigo[900],
      light: indigo[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#5D6162',
      default: '#ffffff',
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },
});
