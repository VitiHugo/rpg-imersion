import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Grid)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));