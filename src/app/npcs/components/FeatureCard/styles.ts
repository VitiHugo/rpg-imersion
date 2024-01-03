import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Card)(({ theme }) => ({
  transition: '.3s',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9
  },
}));