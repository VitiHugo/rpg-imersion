'use client'

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const CharacterPin = styled(Box)(({ theme }) => ({
  width: '52px',
  height: '52px',
  borderRadius: '50% 50% 50% 0',
  background: theme.palette.blood.main,
  position: 'absolute',
  transform: 'rotate(-45deg)',
  left: '50%',
  top: '50%',
  margin: '-15px 0 0 -15px',
  zIndex: 9,

  cursor: 'pointer',
}));

export const CharacterPinImage = styled(Image)(({ theme }) => ({
  position: 'absolute',
  width: '46.5px',
  height: '46.5px',
  transform: 'rotate(45deg)',
  borderRadius: '50%',
  left: 0,
  right: 0,
  margin: '3px 0 0 3px',
  textAlign: 'center',
  zIndex: 10
}))