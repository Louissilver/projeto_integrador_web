import { createTheme } from '@mui/material';
import { cyan, indigo } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00263d',
      dark: '#dd1701',
      light: cyan[900],
      contrastText: '#EFDBB2',
    },
    secondary: {
      main: '#F93822',
      dark: '#00263d',
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
