import { Box, Button, TextField, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  width: '13rem',
  padding: '.75rem',
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',

  border: '1px solid',
  borderRadius: '5px',
  boxShadow: '3px 3px 3px #cbcbcb',

}));
