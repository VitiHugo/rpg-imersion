import { Autocomplete, Box, Input, Select, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container } from "./style";
import { useEffect, useState } from "react";

const checks = [{
  label: 'Acrobatics',
  id: 1,
  type: {
    id: 1,
    name: 'Skill Check'
  },
},{
  label: 'Animal Handling',
  id: 2,
  type: {
    id: 1,
    name: 'Skill Check'
  },
},{
  label: 'Arcana',
  id: 3,
  type: {
    id: 1,
    name: 'Skill Check'
  },
},{
  label: 'Strenght',
  id: 5,
  type: {
    id: 2,
    name: 'Ability Check'
  },
},{
  label: 'Dexterity',
  id: 6,
  type: {
    id: 2,
    name: 'Ability Check'
  },
}]

interface Props {
  check: {
    type: string,
    description: string,
    dc: number,
  }
}

export default function CheckOption({ check }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Autocomplete
        id="grouped-check"
        options={checks.sort((a, b) => -b.type?.name.localeCompare(a.type?.name))}
        groupBy={(option) => option.type.name}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => 
          <TextField {...params} size="small" label="Check" />
        }
      />
      
      <Typography color={theme.palette.dark.main} fontWeight="bold">
        
      </Typography>
      <Typography color={theme.palette.dark.dark} >
        <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
          <Typography color={theme.palette.dark.main} fontWeight='bold' mr={1}>
            DC:  
          </Typography>
          <TextField 
            size='small'
            type='number'
          />
        </Box>
      </Typography>
    </Container>
  )
}