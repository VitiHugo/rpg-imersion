import { Roboto } from 'next/font/google';
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const darkBase = '#292929';
const bloodMain = '#780000';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: darkBase,
    },
    dark: {
      dark: '#292929',
      main: '#585858',
      light: '#999999',
      lighter: '#E6E6E6',
      contrastText: getContrastRatio(darkBase, '#fff') > 4.5 ? '#fff' : '#111',
    },
    blood: {
      main: bloodMain,
      text: '#CA2F2F'
    },
    white: {
      main: '#fff'
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: bloodMain
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff'
        }
      }
    }
  },
});

export default theme;