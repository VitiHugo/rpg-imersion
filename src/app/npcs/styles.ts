import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}));

export const LeftSession = styled(Box)(({ theme }) => ({
  width: '40%',
  background: theme.palette.white.main,
  height: '100vh',
}));

export const RightSession = styled(Box)(({ theme }) => ({
  width: '60%',
  background: theme.palette.dark.lighter
}));

export const VerticalTitleContainer = styled(Box)(({ theme }) => ({
  width: '8%',
}));

export const ListContainer = styled(Stack)(({ theme }) => ({
  
}));

export const StyledVerticalLine = styled(Stack)(({ theme }) => ({
  height: '90vh',
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
