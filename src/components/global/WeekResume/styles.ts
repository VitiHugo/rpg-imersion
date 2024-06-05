'use client'

import { Box, Stack, styled } from "@mui/material";
import { DRAWER_WIDTH } from "../../Layout/Drawer/styles";

export const WeekResumeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'fixed',
  zIndex: 9999,
  top: '.5rem',
  left: '8rem',

  padding: '1rem',
  borderRadius: '10px',
  background: theme.palette.dark.dark,
}))