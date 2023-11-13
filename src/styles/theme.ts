import { Roboto } from 'next/font/google';
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const darkBase = '#292929';

export const bloodBase = '#780000';
const bloodMain = alpha(bloodBase, 0.7);

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
    },
    dark: {
      dark: darkBase,
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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#999999',
            },
            '&:hover fieldset': {
              borderColor: '#585858',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6F7E8C',
            },
          },
          '& label.Mui-focused': {
            color: '#780000',
          },
        },
      },
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