import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)<{vertical: boolean}>(({ theme, vertical }) => ({
  width: '100%',
  transform: 'rotate(-90deg)',
}));