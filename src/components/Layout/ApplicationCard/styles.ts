'use client'

import { Box, Card, Drawer, styled } from "@mui/material";

export const DRAWER_WIDTH = "4.5rem";

export const AppCard = styled(Card)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl,
  boxShadow: theme.shadows[3],
  margin: theme.spacing(3) + ' auto',
}));