'use client'

import '@/utils/prototype';
import { Button, Divider, Grid, TextField, useTheme } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Container } from './styles';
import { Controller, useForm } from 'react-hook-form';

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

export default function SessionSummary() {
  const theme = useTheme();
  const form = useForm({ defaultValues: DEFAULT_VALUES });
  
  return (
    <Container container>
     
    </Container>
  )
}