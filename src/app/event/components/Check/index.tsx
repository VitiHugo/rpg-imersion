import { Box, Typography } from "@mui/material";
import { Container } from "./style";

interface Props {
  check: {
    type: "Skill Check",
    description: "Arcana Check",
    dc: 18,
  }
}

export default function Check({ check }: Props) {
  return (
    <Container>
      <Box sx={{border: '1px solid', boxShadow: '3px 3px 3px #000'}}>
        <Typography>
          {check.description}
        </Typography>
        <Typography>
          DC: {check.dc.toString()}
        </Typography>
      </Box>
    </Container>
  )
}