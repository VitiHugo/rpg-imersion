import { Box, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}));

export const LeftSession = styled(Box)(({ theme }) => ({
  width: '65%',
  height: '100vh',
  padding: '2rem 5%',

  background: theme.palette.white.main,
}));

export const RightSession = styled(Box)(({ theme }) => ({
  width: '35%',

  display: 'flex', 
  position: 'relative',
  background: theme.palette.dark.lighter
}));

export const InfoInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: '.7rem',
}));

export const LeftTitle = styled(Typography)(({ theme }) => ({
  width: 'fit-content',
  padding: '0 .5rem 0 0',
  
  fontWeight: 'bold',
  fontSize: '2rem',
  color: theme.palette.dark.main,
  
  borderBottom: `3px solid ${theme.palette.blood.main}`,
  borderRight: `3px solid ${theme.palette.blood.main}`,
}));