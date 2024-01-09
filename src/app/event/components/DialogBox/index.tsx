import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import { DropDialogImage } from '../DropDialogImage';
import { AppEditor } from '@/components/Editor';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

interface Props {
  register: any,
  remove: any,
  item: any,
  index: any,
}

export function DialogBox({ register, item, index, remove }: Props) {
  const theme = useTheme();
  const [value, setValue] = useState('');

  return (
    <Box key={item.id} sx={{display: 'flex', alignItems: 'center'}}>
      <Box>
        <Typography color={theme.palette.dark.main}>
          Dialog Image
        </Typography>
        <DropDialogImage {...register(`test.${index}.lastName`)}/>
      </Box>
      <ArrowDropDownSharpIcon fontSize="large" sx={{display: {md: 'none'}}}/>
      <ArrowRightSharpIcon sx={{display: {xs: 'none', md: 'inherit', fontSize: '4rem'}}}/>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <DeleteIcon color='primary'sx={{cursor: 'pointer', margin: '0 1rem'}} onClick={() => remove(index)}/>
    </Box>
  );
}
