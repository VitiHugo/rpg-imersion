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

export const BasicInformationContainer = styled(Grid)(({ theme }) => ({
  background: theme.palette.white.main,
}));

export const AdditionalInformationContainer = styled(Grid)(({ theme }) => ({
  //width: '35%',

  display: 'flex', 
  flexDirection: 'column',
  position: 'relative',
}));

export const InfoInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: '.7rem',
}));

export const LeftTitle = styled(Typography)(({ theme }) => ({
  width: 'fit-content',
  padding: '0 .5rem 0 0',
  
  fontWeight: 'bold',
  fontSize: '2rem',
  color: theme.palette.dark.main,
  
  borderBottom: `3px solid ${theme.palette.blood.main}`,
  borderRight: `3px solid ${theme.palette.blood.main}`,
}));

export const CharacterInfoTitle = styled(Typography)(({ theme }) => ({
  width: 'fit-content',
  padding: '0 .5rem 0 0',
  
  fontWeight: 'bold',
  fontSize: '2rem',
  color: theme.palette.dark.main,
  
  borderBottom: `3px solid ${theme.palette.blood.main}`,
  borderRight: `3px solid ${theme.palette.blood.main}`,
}));

export const CharacterImageTitle = styled(Typography)(({ theme }) => ({
  width: '20%',
  background: alpha(theme.palette.dark.dark, 0.8),
  padding: '.5rem',
  borderRadius: '0 5px 5px 0',
  fontWeight: 'bold',
  fontSize: '1.25rem',

  position: 'absolute',
  bottom: 0,
  left: 0,

}));

export const DescriptionEditor = styled(Editor)(({ theme }) => ({
  height: '20%',
}));


export const SaveButton = styled(Button)(({ theme }) => ({
  width: '100%', 
  background: theme.palette.blood.main,

  '&:hover': {
    background: alpha(theme.palette.blood.main, 0.9)
  }
}));