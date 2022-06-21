import { createTheme } from '@mui/material';
import { cyan, indigo } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F93822',
      dark: cyan['A700'],
      light: cyan[200],
      contrastText: '#EFDBB2',
    },
    secondary: {
      main: '#F93822',
      dark: '#013759',
      light: indigo[300],
      contrastText: '#EFDBB2',
    },
    background: {
      paper: '#5D6162',
      default: '#ffffff',
    },
  },
  typography: {
    allVariants: {
      color: '#EFDBB2',
    },
  },
});
