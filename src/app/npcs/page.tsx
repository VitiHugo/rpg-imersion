'use client'

import { useState } from "react";
import { Container, LeftSession, ListContainer, RightSession, StyledVerticalLine, VerticalTitleContainer } from "./styles";

const areas = [{
  id: 1,
  name: 'Strixhaven'
},{
  id: 2,
  name: 'Sigil'
}]

const npcs = [{
  npc_id: 1,
  name: 'Fall from Grace',
  infos: [{

  }]
}]

export default function Home() {
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  

  return (
    <Container>
      <LeftSession>
        <VerticalTitleContainer>
          <SelectNpcArea />
          <StyledVerticalLine />
        </VerticalTitleContainer>
        <ListContainer>

        </ListContainer>
      </LeftSession>
      <RightSession>
        <span>jiwsazhufd</span>
      </RightSession>
    </Container>
  )
}
