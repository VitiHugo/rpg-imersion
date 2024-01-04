import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const Container = styled(Box)(({ theme }) => ({
  height: '12rem',
  width: '100%',
  padding: '0 1rem',
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
  },

  '@media (min-width: 1500px)': {
    padding: '0 2rem',
  },
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

export const StyledPhoto = styled(Image)(({ theme }) => ({
  width: '7rem', 
  height: '7rem',
  
  borderRadius: '5px',
  outline: `2px solid ${theme.palette.blood.text}`,
  outlineOffset: '-7px',

  '@media (min-width: 1500px)': {
    width: '8rem', 
    height: '8rem',
  },
}));

export const CharacterName = styled(Typography)(({ theme }) => ({
  color: theme.palette.dark.dark,
  fontWeight: 'bold',
  fontSize: '2rem',
  
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.4em',
  },
}));
