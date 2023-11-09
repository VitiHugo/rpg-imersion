import { Box } from "@mui/material";
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

export const CharacterImage = styled(Image)(({ theme }) => ({
  width: '14rem',
  height: '14rem',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.blood.main}`, 
}));

export const EventImage = styled(Image)(({ theme }) => ({
  width: '4rem',
  height: '4rem',
  borderRadius: '10px',
}));
