import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import { DropDialogImage } from '../DropDialogImage';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactQuill from 'react-quill';
import '@/styles/quill.snow.css';
import { DeleteButton } from "./style";

interface Props {
  register: any,
  remove: any,
  watch: any,
  setValue: any,
  item: any,
  index: any,
}

export function DialogBox({ register, item, index, remove, watch, setValue }: Props) {
  const theme = useTheme();

  const dialogPosition = watch(`dialog.${index}.position`);

  const editorContent = watch(`dialog.${index}.text`);
  const onEditorStateChange = (editorState: string) => {
    setValue(`dialog.${index}.text`, editorState);
  };

  const imageContent = watch(`dialog.${index}.text`);
  const onImageStateChange = (imageState: string) => {
    setValue(`dialog.${index}.urlImage`, imageState);
  };

  return (
    <Box key={item.id} sx={{display: 'flex', alignItems: 'center', width: '100%', marginTop: '2rem'}}>
      {dialogPosition == 'left' ? (
        <>
          <Box>
            <Typography color={theme.palette.dark.main}>
              Dialog Image
            </Typography>
            <DropDialogImage onChange={onImageStateChange}/>
          </Box>
          <ArrowDropDownSharpIcon fontSize="large" sx={{display: {md: 'none'}}}/>
          <ArrowRightSharpIcon sx={{display: {xs: 'none', md: 'inherit', fontSize: '4rem'}}}/>
          <Box sx={{height: '100%', display: 'flex', width: '100%'}}>
            <ReactQuill 
              theme="snow" 
              value={editorContent} 
              onChange={onEditorStateChange} 
            />
          </Box>
          <DeleteButton
            onClick={() => remove(index)}
            variant="contained"
            position={dialogPosition}
          >
            <DeleteIcon/>
          </DeleteButton>
        </>
      ): (
        <>
          <DeleteButton
            onClick={() => remove(index)}
            variant="contained"
            position={dialogPosition}
          >
            <DeleteIcon/>
          </DeleteButton>
          <Box sx={{height: '100%', display: 'flex', width: '100%'}}>
            <ReactQuill 
              theme="snow" 
              value={editorContent} 
              onChange={onEditorStateChange} 
            />
          </Box>
          <ArrowLeftSharpIcon sx={{display: {xs: 'none', md: 'inherit', fontSize: '4rem'}}}/>
          <ArrowDropDownSharpIcon fontSize="large" sx={{display: {md: 'none'}}}/>
          <Box>
            <Typography color={theme.palette.dark.main}>
              Dialog Image
            </Typography>
            <DropDialogImage onChange={onImageStateChange}/>
          </Box>
        </>
      )}
    </Box>
  );
}
