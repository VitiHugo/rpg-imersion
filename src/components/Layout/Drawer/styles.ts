'use client'

import { Box, Drawer, styled } from "@mui/material";

export const DRAWER_WIDTH = "4.5rem";

export const TopBar = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.dark.dark,
}));