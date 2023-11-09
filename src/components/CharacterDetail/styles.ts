import { Box, Paper, Typography, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const CharacterDetailContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.palette.dark.main,
  borderRadius: '10px',
}));

export const CharacterImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '16rem',
  borderRadius: '10px 10px 0 0',

  position: 'relative',
}));

export const CharacterNameContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: alpha(theme.palette.dark.main, 0.75),
  borderRadius: '10px 0 0 10px',
  padding: '.5rem 1rem',
  minWidth: '45%',
  bottom: 0,
  right: 0,
}));

export const EventImage = styled(Image)(({ theme }) => ({
  width: '4rem',
  height: '4rem',
  borderRadius: '10px',
}));

export const EventCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.dark.light,
  borderRadius: '10px',
  padding: '.5rem',
  cursor: 'pointer',
  transition: '0.2s',
  
  ':hover': {
    background: alpha(theme.palette.dark.light, 0.5)
  },

  '& + &': {
    marginTop: '.9rem',
  }
}));
