import { Container, InfoItem } from "./styles";
import { useTheme } from "@mui/material/styles";
import { Npc } from "@/models/model";
import { Box, Typography } from "@mui/material";

interface Props {
  npc: Npc,
  hasTopBottomBorder?: boolean
}

export function Infos({ npc, hasTopBottomBorder }: Props) {
  const theme = useTheme();

  const border = hasTopBottomBorder ? {
    borderTop: `1px solid ${theme.palette.dark.light}`,
    borderBottom: `1px solid ${theme.palette.dark.light}`,
  } : {}

  return (
    <Container sx={border}>
      {npc.infos.map(info => (
        <InfoItem key={info.title}>
          <Typography color={theme.palette.dark.light}>
            {info.title}:
          </Typography>
          <Typography color={theme.palette.dark.light}>
            {info.value}
          </Typography>
        </InfoItem>
      ))}
    </Container>
  )
}