'use client'

import '@/utils/prototype';

import { Box, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container, InfoInput, SaveButton } from "./styles";
import { AppEditor } from '@/components/Editor';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Check from './components/Check';
import { useState } from 'react';
import { Area, EventType } from '@/models/area';

const eventsTypes = [{
  id: 1,
  name: 'NPC Dialog'
},
{
  id: 2,
  name: 'NPC Dialog'
}] as EventType[]

const areas = [{
  id: '1',
  name: 'The Doorms'
},{
  id: '2',
  name: 'Arena'
}] as Area[]

export default function Save() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [areaId, setAreaId] = useState('');
  const [events, setEvents] = useState(eventsTypes);
  const [eventTypeId, setEventTypeId] = useState(1);
  const theme = useTheme();

  const handleChangeArea = (event: SelectChangeEvent) => {
    setAreaId(event.target.value);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setEventTypeId(+event.target.value);
  };
  
  return (
    <Container>
        <Box sx={{padding: '1rem 5%',}}>
          <Typography variant="h1">
            CREATE NEW EVENT
          </Typography>
          <Grid container columnSpacing={5} rowSpacing={2} sx={{marginTop: '1.5rem'}}>
            <Grid item xs={6}>
              <InfoInput 
                label="Title"
                InputLabelProps={{ shrink: true }}
              />            
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{width: '100%'}}>
                <InputLabel>Area</InputLabel>
                <Select
                  labelId="select-character-type-id"
                  id="select-character-type-id"
                  value={areaId}
                  onChange={handleChangeArea}
                  label="Area"
                >
                  <MenuItem value={0}>Select a Area...</MenuItem>
                  {areas.map(area => (
                    <MenuItem key={area.id} value={area.id}>{area.name}</MenuItem>
                  ))}
                </Select>  
              </FormControl>  
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{width: '100%'}}>
                <InputLabel>Type</InputLabel>
                <Select
                  labelId="select-character-type-id"
                  id="select-character-type-id"
                  value={eventTypeId.toString()}
                  onChange={handleChangeType}
                  label="Type"
                >
                  <MenuItem value={0}>Select a Type...</MenuItem>
                  {eventsTypes.map(type => (
                    <MenuItem key={type.id.toString()} value={type.id.toString()}>{type.name}</MenuItem>
                  ))}
                </Select>  
              </FormControl>    
            </Grid>
            
            <Grid item xs={12}>
              <DialogContainer>
                <Box>
                  <Typography>
                    Dialog Image
                  </Typography>
                  
                </Box>
                <AppEditor height={200}/>
              </DialogContainer>
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
            <Grid item xs={12}>
              <Box>
                <Checkbox />
                <Typography>
                  Checks
                </Typography>
              </Box>
              <Typography>
                Tip: The character will succedd if they pass in half of the checks, rounded up. 3 checks will need 2 success to complete the event. 
              </Typography>

              <Box>
                <Check />
              </Box>
            </Grid>
            
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
    </Container>
  )
}