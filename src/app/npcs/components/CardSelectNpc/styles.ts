import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  height: '12rem',
  width: '100%',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginTop: '1rem',

  border: `1px solid ${theme.palette.dark.dark}`,
  borderRadius: '5px',
  cursor: 'pointer',

  transition: '.3s',

  '&:hover': {
    background: '#EDEDED',
    boxShadow: '3px 3px 3px #cbcbcb',
  
    'img': {
      boxShadow: '3px 3px 3px #cbcbcb',
    },
  }
}));

export const CardIndex = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,

  width: '1.5rem',
  height: '1.5rem',
  textAlign: 'center',
  borderLeft: `1px solid ${theme.palette.dark.dark}`,
  borderBottom: `1px solid ${theme.palette.dark.dark}`,
  borderRadius: '0 0 0 5px',
}));

export const InfosContainer = styled(Box)(({ theme }) => ({
}));
