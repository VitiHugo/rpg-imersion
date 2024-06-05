import { Box, Paper, Typography, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const EventDetailContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.palette.dark.dark,
  borderRadius: '10px',
}));

export const EventModalImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '8rem',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',

  position: 'relative',
}));

export const EventTitleContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: alpha(theme.palette.dark.dark, 0.75),
  borderRadius: '10px 0 0 0',
  padding: '.5rem 1rem',
  minWidth: '45%',
  bottom: 0,
  right: 0,
}));

export const DialogCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '.5rem',
  borderRadius: '5px',
  border: `2px solid ${theme.palette.blood.main}`
}));

export const DialogImage = styled(Image)(({ theme }) => ({
  width: '20%',
  height: '20%',
  borderRadius: '5px',
  boxShadow: '2px 2px 2px 2px rgb(16 22 26 / 40%)',
}));