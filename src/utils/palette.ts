import type { PaletteOptions } from '@mui/material/styles/createPalette';

const mainPalette: PaletteOptions = {
    primary: {
      light: '#00C9A0',
      main: '#00856A',
      dark: '#075443',
    },
    secondary: {
      light: '#F2EAF2',
      main: '#7F2B7B',
      dark: '#512D6D',
    },
    text: {
      primary: '#161927',
      secondary: '#FFFFFF',
      disabled: '#64748b',
    },
    success: {
      main: '#22C55E',
      dark: '#28AA67',
      light: '#ebf6f3',
    },
    action: {
      disabled: '#696D81',
      active: '#00809C',
      hover: '#F1F5F9',
    },
    info: {
      main: '#3B82F6',
    },
    background: {
      default: '#E9E7EA',
    },
    warning: {
      main: '#FAB809',
    },
    error: {
      main: '#F43F5E',
    },
    
    

  };

  export const theme: Theme = {
    palette: mainPalette,

}