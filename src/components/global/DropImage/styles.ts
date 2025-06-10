import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '12rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  
  background: theme.palette.dark.light,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'pointer',
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  background: alpha(theme.palette.dark.dark, 0.7),
  borderRadius: '5px',
  padding: '.8rem',
}));

export const SelectFileButton = styled(Button)(({ theme }) => ({
  background: theme.palette.dark.main,
  marginTop: '1rem',
  color: '#fff',
  
  '&:hover': {
    background: theme.palette.blood.main,
    color: theme.palette.dark.lighter,
  }
}));

export const ImageTitle = styled(Typography)(({ theme }) => ({
  width: '20%',
  background: alpha(theme.palette.dark.dark, 0.8),
  padding: '.5rem',
  borderRadius: '0 5px 5px 0',
  fontWeight: 'bold',
  fontSize: '1.25rem', // ~20px
  position: 'absolute',
  bottom: 0,
  left: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem', // ~16px
    width: '35%',
  },
}));