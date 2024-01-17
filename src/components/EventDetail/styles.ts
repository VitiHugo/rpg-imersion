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