import { useDropzone } from "React-dropzone";
import { Container, SelectFileButton, TextContainer } from "./styles";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useCallback, useEffect, useState } from "react";
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import { CharacterImageTitle } from "../../styles";

function DragCharacterImage({ }) {
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

  }, [])

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
      <CharacterImageTitle>
        Character Image
      </CharacterImageTitle>
    </Container>
  );
}

export default DragCharacterImage;