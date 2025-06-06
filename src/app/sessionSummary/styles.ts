import { Grid, styled } from "@mui/material";

export const Container = styled(Grid)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));