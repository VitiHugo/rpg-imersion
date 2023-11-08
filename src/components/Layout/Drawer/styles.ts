'use client'

import { Drawer, styled } from "@mui/material";

export const DRAWER_WIDTH = "4rem";

export const StyledDrawer = styled(Drawer)(({theme}) => ({
  background: theme.palette.success.main,
}));