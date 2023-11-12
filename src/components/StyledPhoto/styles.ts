import { styled } from "@mui/material/styles";
import Image from "next/image";

export const StyledPhoto = styled(Image)(({ theme }) => ({
  borderRadius: '5px',
  outline: `2px solid ${theme.palette.blood.text}`,
  outlineOffset: '-7px',
}));