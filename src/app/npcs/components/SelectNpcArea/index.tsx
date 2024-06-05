import { FormControl, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Container } from "./styles";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Setting } from "@prisma/client";

interface Props {
  settings: Setting[],
  vertical: boolean
}

export function SelectAreaNpc({ settings, vertical = false }: Props) {
  const [settingId, setSettingId] = useState(settings[0].id);
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setSettingId(event.target.value);
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
          value={settingId}
          onChange={handleChange}
          label="Area"
        >
          {settings.map(setting => (
            <MenuItem key={setting.id} value={setting.id}>{setting.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  )
}