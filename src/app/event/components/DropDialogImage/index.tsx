import { useDropzone } from "React-dropzone";
import { Container, TextContainer } from "./styles";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

interface Props {
  onChange: any;
  size?: 'cover' | 'auto'
}

export function DropDialogImage({ onChange, size = 'auto' }: Props) {
  const theme = useTheme();

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(() => {
    if(files.length > 0){
      console.log(files[0].preview)
      onChange(files[0].preview)
    }
  },[files])

  return (
    <Container {...getRootProps({className: 'dropzone'})} sx={{
      backgroundImage: `url(${(files.length && files[0].preview) || ""})`,
      backgroundSize: size,
    }}>
      <input {...getInputProps()} />
      <TextContainer>
        <Typography fontWeight="bold">
          Drag 'n' drop a file here
        </Typography>
        <Typography fontWeight="bold">
          or
        </Typography>
        <Typography fontWeight="bold" sx={{display: 'flex'}}>
          Click to select file 
          <HighlightAltIcon sx={{marginLeft:'.3rem'}}/>
        </Typography>
      </TextContainer>
     
    </Container>
  );
}
