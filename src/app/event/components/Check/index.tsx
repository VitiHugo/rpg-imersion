import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container } from "./style";

interface Props {
  check: {
    type: string,
    description: string,
    dc: number,
  }
}

export default function Check({ check }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Typography color={theme.palette.dark.main} fontWeight="bold">
        {check.description}
      </Typography>
      <Typography color={theme.palette.dark.dark} >
        DC: {check.dc.toString()}
      </Typography>
    </Container>
  )
}