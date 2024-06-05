import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { Editor } from '@tinymce/tinymce-react';

export const Container = styled(Grid)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));