import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const Container = styled(Grid)(({ theme }) => ({
  width: '100%',
}));

export const LeftSession = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  maxHeight: '100vh',

  display: 'flex',
  background: theme.palette.white.main,
}));

export const RightSession = styled(Grid)(({ theme }) => ({
  display: 'flex', 
  position: 'relative',
  width: '60%',
  height: '100%',
  minHeight: '100vh',
  background: theme.palette.dark.lighter
}));

export const VerticalTitleContainer = styled(Box)(({ theme }) => ({
  height: '90%',
  width: '8%',
  padding: '8rem 0 4rem .5rem ',

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ListContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '3rem 3rem 0 1rem',

  [theme.breakpoints.down('lg')]: {
  },
}));

export const StyledVerticalLine = styled(Stack)(({ theme }) => ({
  height: '80vh',
  borderRight: `2px solid ${theme.palette.dark.dark}`, 
  position: 'relative',

  '&:before, &:after' : {
      position: 'absolute', 
      bottom: '-6px', 
      left: 'calc(100% - 2px)', 
      height: '6px', 
      width: '6px', 
      background: theme.palette.dark.dark, 
      content: `""`, 
      borderRadius: '5px',
  },

  '&:before': {
      top: 0
  }
}));

export const StyledPhoto = styled(Image)(({ theme }) => ({
  width: '15rem', 
  height: '15rem',

  borderRadius: '5px',
  outline: `2px solid ${theme.palette.blood.text}`,
  outlineOffset: '-7px',

  '@media (min-width: 1750px)': {
    width: '22rem', 
    height: '22rem',
  },
}));

export const StyledDivider = styled(Image)(({ theme }) => ({
  maxWidth: '100%',
}));
