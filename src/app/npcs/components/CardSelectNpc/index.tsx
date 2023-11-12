import { Box, Typography } from "@mui/material";
import { CardIndex, Container, InfosContainer } from "./styles";
import { useTheme } from "@mui/material/styles";
import { Npc } from "@/models/model";
import SeranaPhoto from "@/assets/images/serana-photo.png"
import { Infos } from "../Infos";
import { StyledPhoto } from "@/components/StyledPhoto/styles";
import { Dispatch, SetStateAction } from "react";

interface Props {
  npc: Npc,
  index: number,
  isSelected: boolean,
  setSelected: Dispatch<SetStateAction<Npc>>
}

const isActiveStyles = {
  background: '#EDEDED',
  boxShadow: '3px 3px 3px #cbcbcb',

  'img': {
    boxShadow: '3px 3px 3px #cbcbcb',
  }
}

export function CardSelectNpc({ npc, index, setSelected, isSelected = false }: Props) {
  const theme = useTheme();

  return (
    <Container sx={isSelected ? isActiveStyles : {}} onClick={() => setSelected(npc)}>
      <CardIndex>
        {index}
      </CardIndex>
      <StyledPhoto alt={`${npc.name} Photo`} src={SeranaPhoto} sx={{width: '7rem', height: '7rem'}}/>
      <Box sx={{padding: '0 .8rem', width: '100%'}}>
        <Typography color={theme.palette.dark.dark} fontWeight="bold" fontSize="2rem">
          {npc.name.toUpperCase()}
        </Typography>
        <InfosContainer>
          <Infos npc={npc}/>
        </InfosContainer>
      </Box>
    </Container>
  )
}