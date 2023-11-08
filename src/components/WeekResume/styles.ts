'use client'

import { Box, Stack, styled } from "@mui/material";
import { DRAWER_WIDTH } from "../Layout/Drawer/styles";

export const WeekResumeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "fixed",
  zIndex: 9,
  top: ".5rem",
  left: `calc(${DRAWER_WIDTH} + .5rem)`,

  padding: "1rem",
  borderRadius: "10px",
  background: theme.palette.dark.main,
}))