'use client'

import '@/utils/prototype';
import { Button, Divider, Grid, TextField, useTheme } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Container } from './styles';
import { Controller, useForm } from 'react-hook-form';
import { User } from '@/models/user';
import { useEffect, useState } from 'react';

interface Form {
  first_name: string;
  last_name: string;
  beyondUsername: string;
  imageUrl: string;
  createdAt: Date;
}

const DEFAULT_VALUES: Form = {
  first_name: '',
  last_name: '',
  beyondUsername: '',
  imageUrl: '',
  createdAt: new Date(),
}

export default function Profile() {
  const [ user, setUser ] = useState<User>();
  const theme = useTheme();
  const form = useForm({ defaultValues: DEFAULT_VALUES });
  
  useEffect(() => {
    if (!user) {
      fetch('/api/profile?id=1')
        .then(res => res.json())
        .then(data => {
          setUser(data);
        });
    }
  },[])

  return (
    <Container container>
      <Grid container columnSpacing={5} rowSpacing={2} sx={{marginTop: '1.5rem'}}>
        <Grid item xs={6}>
          <Controller
            control={form.control}
            name='first_name'
            render={({ field: { onChange, ...props }, fieldState }) => (
              <TextField 
                {...props}
                label="First name"
                onChange={(data) => onChange(data)}
                InputLabelProps={{ shrink: true }}
              />    
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller 
            control={form.control}
            name='last_name'
            render={({ field: { onChange, ...props }, fieldState }) => (
              <TextField 
                {...props}
                label="Last name"
                onChange={(data) => onChange(data)}
                InputLabelProps={{ shrink: true }}
              />    
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{margin: '1.3rem 0',}}>
          <Divider sx={{background: theme.palette.dark.dark}}/>
        </Grid>
        <Grid item xs={12} sx={{marginTop: '1rem'}}>
          <Button
            startIcon={<PersonAddIcon />}
            variant="contained" 
            onClick={() => console.log('onClick', form.getValues())}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}