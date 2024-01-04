import { Box, Typography } from "@mui/material";
import { CardIndex, CharacterName, Container, InfosContainer, StyledPhoto } from "./styles";
import { useTheme } from "@mui/material/styles";
import { Npc } from "@/models/model";
import SeranaPhoto from "@/assets/images/serana-photo.png"
import { Infos } from "../Infos";
import { Dispatch, SetStateAction } from "react";

interface Props {
  npc: Npc,
  index: number,
  isSelected: boolean,
  setSelected: any,
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
      <StyledPhoto alt={`${npc.name} Photo`} src={SeranaPhoto}/>
      <Box sx={{padding: '0 .8rem', width: '100%'}}>
        <CharacterName>
          {npc.name.toUpperCase()}
        </CharacterName>
        <InfosContainer>
          <Infos npc={npc}/>
        </InfosContainer>
      </Box>
    </Container>
  )
}