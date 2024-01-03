'use client'

import '@/utils/prototype';

import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AdditionalInformationContainer, BasicInformationContainer, Container, InfoInput, LeftTitle, SaveButton } from "./styles";
import { AppCheckbox } from "@/components/Checkbox";
import DropCharacterImage from './components/DropCharacterImage';
import { AppEditor } from '@/components/Editor';
import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CharacterType, Setting } from '@prisma/client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Save() {
  const [characterTypeId, setCharacterTypeId] = useState(0)
  const [settingId, setSettingId] = useState('')
  const [settings, setSettings] = useState<Setting[]>([])
  const [characterTypes, setCharacterTypes] = useState<CharacterType[]>([])
  const theme = useTheme();

  fetch('/api/settings').then(res => res.json()).then(res => setSettings(res));
  fetch('/api/characterTypes').then(res => res.json()).then(res => setCharacterTypes(res));

  const handleChangeCharacterType = (event: SelectChangeEvent) => {
    setCharacterTypeId(+event.target.value);
  };

  const handleChangeSetting = (event: SelectChangeEvent) => {
    setSettingId(event.target.value);
  };
  
  return (
    <Container container>
      <BasicInformationContainer xs={12} lg={8}>
        <DropCharacterImage />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <LeftTitle variant="h1">
              Basic Information
            </LeftTitle>
          </AccordionSummary>
          <AccordionDetails sx={{padding: 0}}>
            <Box sx={{padding: '1rem 5%',}}>              
              <Grid container columnSpacing={5} rowSpacing={2} sx={{marginTop: '1.5rem'}}>
                <Grid item xs={6}>
                  <InfoInput 
                    label="First name"
                    InputLabelProps={{ shrink: true }}
                  />            
                </Grid>
                <Grid item xs={6}>
                  <InfoInput 
                    label="Last name"
                    InputLabelProps={{ shrink: true }}
                  />    
                </Grid>
                <Grid item xs={12} sx={{marginTop: '1.5rem'}}>
                  <AppEditor height={300}/>
                </Grid>
                <Grid item xs={12} sx={{margin: '1.3rem 0',}}>
                  <Divider sx={{background: theme.palette.dark.dark}}/>
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel>Character Type</InputLabel>
                    <Select
                      labelId="select-character-type-id"
                      id="select-character-type-id"
                      value={characterTypeId.toString()}
                      onChange={handleChangeCharacterType}
                      label="Character Type"
                    >
                      <MenuItem value={0}>Select a type...</MenuItem>
                      {characterTypes.map(type => (
                        <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                      ))}
                    </Select>  
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel>Setting</InputLabel>
                    <Select
                      labelId="select-setting-id"
                      id="select-setting-id"
                      disableUnderline={true}
                      value={settingId}
                      onChange={handleChangeSetting}
                      label="Setting"
                      sx={{width: '100%'}}
                    >
                      <MenuItem value={0}>Select a setting...</MenuItem>
                      {settings.map(sett => (
                        <MenuItem key={sett.id} value={sett.id}>{sett.name}</MenuItem>
                      ))}
                    </Select> 
                  </FormControl>
                </Grid>
                {characterTypeId != 2 && (
                  <Grid item xs={6}>
                    <InfoInput 
                      label="DnD Beyond Character Url"
                      InputLabelProps={{ shrink: true }}
                    />    
                  </Grid>
                )}
                
                <Grid item xs={12} sx={{marginTop: '1rem'}}>
                  <SaveButton
                    startIcon={<PersonAddIcon />}
                    variant="contained"          
                  >
                    Save
                  </SaveButton>
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </BasicInformationContainer>
      <AdditionalInformationContainer xs={12} lg={4}>
        <Box sx={{
          margin: '0 auto',
          width: '80%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'start', 
          justifyContent: 'center',
        }}>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Typography 
                variant='h3' 
                color={theme.palette.dark.main} 
                fontWeight="bold"
                fontSize="1.5rem"
                borderBottom={`3px solid ${theme.palette.blood.main}`}
              >
                 INFORMATIONS
              </Typography>
            </Box>
            <Divider sx={{margin: '1.5rem 0'}}/>
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
      </AdditionalInformationContainer>
    </Container>
  )
}