import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

export const InfoItem = styled(Box)(({ theme }) => ({
  padding: '0 .5rem',
  minWidth: '6rem',

  display: 'flex',
  flexDirection: 'column',

  '& + &': {
    borderLeft: `1px solid ${theme.palette.dark.light}`,
  }
}));