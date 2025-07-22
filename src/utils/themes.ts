import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f30006',
    },
    secondary: {
      main: '#3d5afe',
    },
  },
  typography: {
    h1: {
      fontSize: '6rem',
    },
  },
});

//export const ThemeContext = createContext(theme);
