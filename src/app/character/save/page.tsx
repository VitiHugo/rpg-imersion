'use client'

import '@/utils/prototype';

import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container, InfoInput, LeftSession, LeftTitle, RightSession } from "./styles";
import { AppCheckbox } from "@/components/Checkbox";
import DragAndDropZone from "@/components/DragAndDropZone";
import { useState } from "react";

export default function Save() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const theme = useTheme();

  return (
    <Container>
      <LeftSession>
        <LeftTitle variant="h1">
          CREATE NEW CHARACTER
        </LeftTitle>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <InfoInput 
              label="First name"
              InputLabelProps={{ shrink: true }}
            />            
            <InfoInput 
              label="Last name"
              InputLabelProps={{ shrink: true }}
            />         
          </Grid>
          <Grid item xs={6}>
            <FormLabel>Character Image</FormLabel>
            <DragAndDropZone 
              selectedFiles={selectedFiles}
              onSelectFiles={setSelectedFiles}
            />
          </Grid>
        </Grid>
      </LeftSession>
      <RightSession>
        <Box sx={{
          margin: '0 auto',
          width: '80%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'start', 
          justifyContent: 'center',
        }}>
            <Typography variant="caption" color={theme.palette.blood.main} fontWeight="bold">
              TIP: Fill only the fields the party has already discovered.
            </Typography>
            <InfoInput 
              label="Origin"
              InputLabelProps={{ shrink: true }}
              placeholder="???"
            />
            <InfoInput 
              label="Faction"
              InputLabelProps={{ shrink: true }}
              placeholder="???"
            />
            <InfoInput 
              label="Size"
              InputLabelProps={{ shrink: true }}
              placeholder="???"
            />
            <InfoInput 
              label="Race"
              InputLabelProps={{ shrink: true }}
              placeholder="???"
            />

            <FormControl sx={{marginTop: '1rem'}}>
              <FormControlLabel 
                control={<AppCheckbox />}
                label="Is dead?"
                sx={{
                  '.MuiFormControlLabel-label': {
                    color: theme.palette.dark.main,
                  }
                }}
              />
            </FormControl>
        </Box>
      </RightSession>
    </Container>
  )
}