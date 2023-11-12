import { Area } from "@/models/area";
import { FormControl, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Container } from "./styles";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

interface Props {
  areas: Area[],
  vertical: boolean
}

export function SelectAreaNpc({ areas, vertical = false }: Props) {
  const [areaId, setAreaId] = useState(areas[0].id);
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setAreaId(+event.target.value);
  };

  return (
    <Container vertical={vertical}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          <Typography color={theme.palette.blood.text} fontWeight="bold" fontSize="1.5rem">
            NPCs
          </Typography>
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          disableUnderline={true}
          value={areaId.toString()}
          onChange={handleChange}
          label="Age"
        >
          {areas.map(area => (
            <MenuItem key={area.id} value={area.id}>{area.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  )
}