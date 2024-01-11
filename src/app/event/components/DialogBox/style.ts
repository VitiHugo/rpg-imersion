import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DeleteButton = styled(Button)<{position: string}>(({ theme, position }) => ({
  height: '100%',
  width: '2rem',
  minWidth: 0,
  marginLeft: position == 'left' ? '.7rem' : '0',
  marginRight: position == 'right' ? '.7rem' : '0',
}));
