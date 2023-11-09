import { Roboto } from 'next/font/google';
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const darkBase = '#292929';

const bloodBase = '#780000';
const bloodMain = alpha(bloodBase, 0.7);

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: darkBase,
    },
    dark: {
      main: darkBase,
      light: alpha(darkBase, 0.5),
      dark: alpha(darkBase, 0.9),
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
    }
  },
});

export default theme;