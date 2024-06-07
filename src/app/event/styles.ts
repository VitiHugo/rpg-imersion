import { Box, Grid, Stack, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}));

export const DialogContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const Input = styled(TextField)(({ theme }) => ({
  width: '100%',
}))

export const BtnAddCheck = styled(Box)(({ theme }) => ({
  width: '13rem',
  padding: '.75rem',
  background: theme.palette.dark.lighter,
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '1px solid',
  borderRadius: '5px',
  boxShadow: '3px 3px 3px #cbcbcb',

  cursor: 'pointer',
  transition: '.2s',

  '&:hover': {
  background: theme.palette.white.main,
  }
}))