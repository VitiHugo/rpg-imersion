import { alpha, styled } from "@mui/material/styles";
import { Box, Button, lighten, Typography } from '@mui/material';

export const DragContainer = styled(Box)<{ dragging: boolean; }>(({ theme, dragging }) => ({
  border: `5px dashed ${dragging ? theme.palette.blood.main : theme.palette.dark.dark}}`,
  position: 'relative',
  backgroundColor: dragging ? lighten(theme.palette.primary.main, 0.85) : 'transparent',
}));

export const DragContentOverlay = styled(Box)(({ theme }) => ({
  backgroundColor: 'red',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: theme.zIndex.appBar - 1,
}));

export const DragContentArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: '1rem',
  fontSize: '36',
  color: theme.palette.dark.main,

  '.MuiSvgIcon-root': {
    fontSize: '3rem',
  }
}));

export const DragContentButtons = styled(Box)<{dragging: boolean}>(({theme, dragging}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: '1rem',
  fontSize: '36',
  color: theme.palette.dark.main,
  opacity: dragging ? 0 : 1,
  pointerEvents: dragging ? 'none' : 'initial',
}));

export const DragContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.dark.light,
  fontSize: '1rem',
  fontWeight: 'bold'
}));

export const DragAndDropArea = styled(Box)(({ theme }) => ({
  border: `4px solid red`,
  padding: theme.spacing(3),
  textAlign: `center`,
  position: 'relative',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const DragAndDropDescription = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),

  '.MuiSvgIcon-root': {
    color: theme.palette.dark.light,
    fontSize: `2rem`,
  }
}));

export const SelectFileButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.dark.main,

  '&:hover': {
    backgroundColor: alpha(theme.palette.dark.main,0.8),
  }
}));