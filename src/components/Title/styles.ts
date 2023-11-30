import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)(({ theme }) => ({
  width: 'fit-content',
  padding: '0 .5rem 0 0',
  
  fontWeight: 'bold',
  fontSize: '2rem',
  color: theme.palette.dark.main,
  
  borderBottom: `3px solid ${theme.palette.blood.main}`,
  borderRight: `3px solid ${theme.palette.blood.main}`,
}));