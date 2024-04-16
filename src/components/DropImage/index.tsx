import { useDropzone } from "React-dropzone";
import { Container, TextContainer, ImageTitle } from "./styles";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

interface DragImageProps {
  label?: string
}

function DragImage({ label }: DragImageProps) {
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

  return (
    <Container {...getRootProps({className: 'dropzone'})} sx={{backgroundImage: `url(${(files.length && files[0].preview) || ""})`}}>
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
      {label && (
        <ImageTitle>
          {label}
        </ImageTitle>
      )}
    </Container>
  );
}

export default DragImage;