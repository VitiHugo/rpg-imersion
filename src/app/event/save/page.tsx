'use client'

import '@/utils/prototype';

import { Box, Button, Checkbox, FormControl, Grid, InputLabel, Menu, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BtnAddCheck, Container, DialogContainer, Input } from "../styles";
import CheckOption from '../components/CheckOption';
import { useState } from 'react';
import { Area, EventType } from '@/models/area';
import { Title } from '@/components/Title/styles';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CommentIcon from '@mui/icons-material/Comment';
import MessageIcon from '@mui/icons-material/Message';

import AddIcon from '@mui/icons-material/Add';
import { useForm, useFieldArray } from "react-hook-form";
import ForumIcon from '@mui/icons-material/Forum';
import { DialogBox } from '../components/DialogBox';
import DropImage from '@/components/DropImage';

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
  const [hasChecks, setHasChecks] = useState(false);
  const [eventTypeId, setEventTypeId] = useState(1);
  const theme = useTheme();
  const { register, control, handleSubmit, watch, getValues, setValue } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dialog"
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickAddDialogBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAddDialogBtn = (position: string) => {
    append({ urlImage: "", text: "", position: position })
    setAnchorEl(null);
  };

  const handleChangeArea = (event: SelectChangeEvent) => {
    setAreaId(event.target.value);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setEventTypeId(+event.target.value);
  };

  const handleChangeHasChecks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasChecks(event.target.checked);
  };

  const onSubmit = (data: any) => {
    const dialogs = data.dialogs.map((dialog, i) => ({
      urlImage: dialog.urlImage,
      text: dialog.text,
      sequence: i,
      position: dialog.position
    }))

    const query = {
      dialogs
    }
    console.log(data)
  };
  
  return (
    <Container sx={{display: 'flex', flexDirection: 'column'}}>
      <Box>
        <DropImage label="Display Image" />
      </Box>
      <Box sx={{padding: '1rem 5%',}}>
        <Title variant="h1">
          CREATE NEW EVENT
        </Title>
        <form style={{width: '100%'}}>
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
              {fields.map((item, index) => (
                <DialogBox 
                  index={index}
                  item={item}
                  register={register}
                  watch={watch}
                  setValue={setValue}
                  remove={remove}
                  key={item.id}
                />
              ))}
              <Button 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickAddDialogBtn}
                sx={{marginTop: '2rem'}}
                startIcon={<ForumIcon />}
                variant='contained' 
                color='error'
              >
                Add Dialog
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseAddDialogBtn}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => handleCloseAddDialogBtn('left')}>
                  <MessageIcon style={{marginRight: '.5rem'}}/>
                  Left Dialog
                </MenuItem>
                <MenuItem onClick={() => handleCloseAddDialogBtn('right')}>
                  <CommentIcon style={{marginRight: '.5rem'}}/>
                  Right Dialog
                </MenuItem>
              </Menu>
              
            </DialogContainer>
            
            <Grid item xs={12} mt={6}>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Checkbox 
                  checked={hasChecks}
                  onChange={handleChangeHasChecks}
                  sx={{padding: 0}} 
                />
                <Typography
                  sx={{borderBottom: `3px solid ${theme.palette.blood.main}`, lineHeight: 1}}
                  color={theme.palette.dark.main}
                  fontWeight="bold"
                >
                  Checks
                </Typography>
              </Box>
              <Typography color={theme.palette.blood.main} variant="caption">
                Tip: The character will succedd if they pass in half of the checks, rounded up. EX: 3 checks will need 2 success to complete the event. 
              </Typography>
              {hasChecks && (
                <Box display="flex" flexDirection="column" gap={1} mt={2}>
                  <Box display="flex" >
                    <CheckOption check={{
                        type: 'Skill Check',
                        dc: 18,
                        description: 'Arcana Check'
                      }} 
                    />
                    <Box ml={2}>
                      <Typography
                        color={theme.palette.dark.main}
                        fontWeight="bold"
                        fontSize="1.2rem"
                      >
                        Description
                      </Typography>
                      <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Checkbox 
                          checked={hasChecks}
                          onChange={handleChangeHasChecks}
                          sx={{padding: 0}} 
                        />
                        <Typography
                          color={theme.palette.dark.main}
                          fontWeight="bold"
                        >
                          Image
                        </Typography>
                      </Box>
                      <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Checkbox 
                          checked={hasChecks}
                          onChange={handleChangeHasChecks}
                          sx={{padding: 0}} 
                        />
                        <Typography
                          color={theme.palette.dark.main}
                          fontWeight="bold"
                        >
                          Audio
                        </Typography>
                      </Box>
                      <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Checkbox 
                          checked={hasChecks}
                          onChange={handleChangeHasChecks}
                          sx={{padding: 0}} 
                        />
                        <Typography
                          color={theme.palette.dark.main}
                          fontWeight="bold"
                        >
                          Text
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <BtnAddCheck>
                    <AddIcon />
                  </BtnAddCheck>
                </Box>
              )}
            </Grid>
            
            <Grid item xs={12} sx={{marginTop: '1rem'}}>
              <Button
                startIcon={<Diversity3Icon />}
                variant="contained"
                sx={{width: '100%'}} 
                onClick={handleSubmit(onSubmit)}
                type="button"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}