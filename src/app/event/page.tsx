'use client'

import '@/utils/prototype';

import { Box, Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BtnAddCheck, Container, DialogContainer, Input } from "./styles";
import { AppEditor } from '@/components/Editor';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Check from './components/Check';
import { useState } from 'react';
import { Area, EventType } from '@/models/area';
import { Title } from '@/components/Title/styles';
import { AppCheckbox } from '@/components/Checkbox';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import { DropDialogImage } from './components/DropDialogImage';
import AddIcon from '@mui/icons-material/Add';

const eventsTypes = [{
  id: 1,
  name: 'NPC Dialog'
},
{
  id: 2,
  name: 'Event'
}] as EventType[]

const areasTest = [{
  id: '1',
  name: 'The Doorms'
},{
  id: '2',
  name: 'Arena'
}] as Area[]

export default function Save() {
  const [areas, setAreas] = useState(areasTest);
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
          <Title variant="h1">
            CREATE NEW EVENT
          </Title>
          <Grid container columnSpacing={2} rowSpacing={2} sx={{marginTop: '1.5rem'}}>
            <Grid item xs={12} md={6}>
              <Input 
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
            
            <DialogContainer item xs={12} sx={{display: 'flex', alignItems: 'center'}}>
              <Box>
                <Typography color={theme.palette.dark.main}>
                  Dialog Image
                </Typography>
                <DropDialogImage />
              </Box>
              <ArrowDropDownSharpIcon fontSize="large" sx={{display: {md: 'none'}}}/>
              <ArrowRightSharpIcon fontSize="large" sx={{display: {xs: 'none', md: 'inherit'}}}/>
              <AppEditor height={220}/>
            </DialogContainer>
            
            <Grid item xs={12} mt={6}>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Checkbox sx={{padding: 0}}/>
                <Typography
                  sx={{borderBottom: `3px solid ${theme.palette.blood.main}`, lineHeight: 1}}
                  color={theme.palette.dark.main}
                  fontWeight="bold"
                >
                  Checks
                </Typography>
              </Box>
              <Typography color={theme.palette.blood.main} variant="caption">
                Tip: The character will succedd if they pass in half of the checks, rounded up. 3 checks will need 2 success to complete the event. 
              </Typography>

              <Box display="flex" gap={1}>
                <Check check={{
                    type: 'Skill Check',
                    dc: 18,
                    description: 'Arcana Check'
                  }} 
                />
                <BtnAddCheck>
                  <AddIcon />
                </BtnAddCheck>
              </Box>
            </Grid>
            
            <Grid item xs={12} sx={{marginTop: '1rem'}}>
              <Button
                startIcon={<Diversity3Icon />}
                variant="contained"
                sx={{width: '100%'}} 
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
    </Container>
  )
}