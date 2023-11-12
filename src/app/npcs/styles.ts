import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}));

export const LeftSession = styled(Box)(({ theme }) => ({
  width: '40%',
  height: '100vh',

  display: 'flex',
  background: theme.palette.white.main,
}));

export const RightSession = styled(Box)(({ theme }) => ({
  width: '60%',
  background: theme.palette.dark.lighter
}));

export const VerticalTitleContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '8%',
  padding: '8rem 0 4rem 0 ',

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ListContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '3rem 4rem 0 1rem',
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
