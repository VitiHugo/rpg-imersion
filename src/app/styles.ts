'use client'

import { DRAWER_WIDTH } from "@/components/Layout/Drawer/styles";
import { bloodBase, darkBase } from "@/styles/theme";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const MainContainer = styled('main')(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#ffe4c9',
}))

export const AppContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  bgcolor: 'background.default',
  
  [theme.breakpoints.up('md')]: {
    marginLeft: DRAWER_WIDTH
  }
}))

export const CharacterPin = styled(Box)(({ theme }) => ({
  width: '52px',
  height: '52px',
  borderRadius: '50% 50% 50% 0',
  background: bloodBase,
  position: 'absolute',
  transform: 'rotate(-45deg)',
  left: '50%',
  top: '50%',
  margin: '-15px 0 0 -15px',
  zIndex: 9,

  cursor: 'pointer',
}));

export const EventPin = styled(Box)(({ theme }) => ({
  width: '52px',
  height: '52px',
  borderRadius: '50% 50% 50% 0',
  background: theme.palette.success.dark,
  position: 'absolute',
  transform: 'rotate(-45deg)',
  left: '15%',
  top: '55%',
  margin: '-15px 0 0 -15px',
  zIndex: 9,

  cursor: 'pointer',
}));

export const LocationPin = styled(Box)(({ theme }) => ({
  width: '52px',
  height: '52px',
  borderRadius: '50% 50% 50% 0',
  background: darkBase,
  position: 'absolute',
  transform: 'rotate(-45deg)',
  right: '15%',
  top: '15%',
  margin: '-15px 0 0 -15px',
  zIndex: 9,

  cursor: 'pointer',
}));

export const CharacterPinImage = styled(Image)(({ theme }) => ({
  position: 'absolute',
  width: '46.5px !important',
  height: '46.5px !important',
  transform: 'rotate(45deg)',
  borderRadius: '50%',
  left: 0,
  right: 0,
  margin: '3px 0 0 3px',
  textAlign: 'center',
  zIndex: 10
}))