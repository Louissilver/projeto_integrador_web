import { createTheme } from '@mui/material';
import { cyan, indigo } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: indigo[400],
      dark: indigo[700],
      light: indigo[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[900],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    },
  },
  typography: {
    allVariants: {
      color: cyan [900],
    },
  },
});
