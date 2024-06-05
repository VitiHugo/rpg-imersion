import { Box, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.palette.dark.dark,
  borderRadius: '10px',
}));

export const LocationImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '16rem',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',
  
  position: 'relative',
}));

export const LocationNameContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: alpha(theme.palette.dark.dark, 0.75),
  borderRadius: '10px 0 0 0',
  padding: '.5rem 1rem',
  minWidth: '45%',
  bottom: 0,
  right: 0,
}));