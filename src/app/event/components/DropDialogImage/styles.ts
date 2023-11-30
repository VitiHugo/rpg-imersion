import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '200px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  
  background: theme.palette.dark.light,
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