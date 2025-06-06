'use client'

import { useState } from "react";
import { Container, LeftSession, ListContainer, RightSession, StyledPhoto, StyledVerticalLine, VerticalTitleContainer } from "./styles";
import { SelectAreaNpc } from "./components/SelectNpcArea";
import { Box, MenuItem, Select, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CardSelectNpc } from "./components/CardSelectNpc";
import { Npc } from "@/models/model";
import { Infos } from "./components/Infos";
import { Setting } from "@prisma/client";
import { FeatureCard } from "./components/FeatureCard";
import SeranaPhoto from "@/assets/images/serana-photo.png"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from "next/image";
import DividerImg from "@/assets/images/divider 1.png";
import { useRouter } from "next/navigation";

const areas = [{
  id: 1,
  name: 'Strixhaven'
},{
  id: 2,
  name: 'Sigil'
}]

const npcs = [{
    id: 1,
    name: 'Serafina Onyx',
    area_id: 2,
    description: `
      A Professora Onyx de Strixhaven é uma figura imponente e enigmática, envolta em mistério e aura de autoridade. 
      Seus longos cabelos negros como a noite caem em cascata sobre seus ombros, e seus olhos profundos emanam uma 
      intensidade que captura a atenção de todos ao seu redor. Vestida em trajes escuros que parecem absorver a 
      luz ao invés de refleti-la, ela se movimenta com uma graça e confiança que transmitem uma presença formidável.
      <br />
      <br />
      A pele de Onyx possui uma tonalidade que sugere uma conexão profunda com elementos mágicos das trevas. Suas mãos, 
      adornadas por anéis entalhados com símbolos arcanos, são hábeis e expressivas, capazes de canalizar a magia negra 
      com destreza.
      <br />
      <br />
      Onyx é conhecida por sua habilidade excepcional em ensinar magia negra, uma maestria que transcende os limites 
      do convencional. Seu olhar penetrante parece sondar a essência de cada estudante, identificando potenciais ocultos 
      e desafiando-os a explorar os cantos mais sombrios de seu próprio poder.
      <br />
      <br />
      Embora sua reputação seja envolta em mistério e, em alguns casos, temor, muitos estudantes reconhecem que 
      sob a fachada austera de Onyx reside uma mentora que valoriza o autoconhecimento e a maestria sobre as artes 
      mágicas das trevas. A sala de aula de Onyx é um lugar onde a curiosidade é incentivada, mas a responsabilidade 
      com o poder obtido é constantemente reforçada. Suas aulas são uma jornada para o desconhecido, onde os estudantes 
      são desafiados a enfrentar e compreender as forças misteriosas que permeiam o tecido da magia negra.
    `,
    infos: [
      {
        id: 1,
        title: 'Origin',
        value: '???'
      },
      {
        id: 3,
        title: 'Size',
        value: 'Medium'
      },
      {
        id: 4,
        title: 'Race',
        value: 'Vampire'
      },
    ]
  } as Npc,
  {
    id: 2,
    name: 'Melythorn',
    area_id: 1,
    infos: [
      {
        id: 1,
        title: 'Origin',
        value: '???'
      },
      {
        id: 3,
        title: 'Size',
        value: 'Medium'
      },
      {
        id: 4,
        title: 'Race',
        value: 'Vampire'
      },
    ],
  } as Npc,
  {
    id: 3,
    name: 'Felicia',
    area_id: 1,
    infos: [
      {
        id: 1,
        title: 'Origin',
        value: '???'
      },
      {
        id: 3,
        title: 'Size',
        value: 'Medium'
      },
      {
        id: 4,
        title: 'Race',
        value: 'Vampire'
      },
    ],
  } as Npc
]

export default function Home() {
  const [selectedNpc, setSelectedNpc] = useState(npcs[0]);
  const [settings, setSettings] = useState<Setting[]>(areas);
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  fetch('/api/settings').then(res => res?.json()).then(res => setSettings(res));
  
  function handleSelectNpc(npc: Npc) {
    if(isMobile) {
      router.push('npcs/' + npc.id.toString())
    } else {
      setSelectedNpc(npc)
    }
  }

  return (
    <Container container>
      <LeftSession item xs={12} lg={5}>
        <VerticalTitleContainer>
          {settings.length > 0 && (
            <SelectAreaNpc settings={settings} vertical={true} />
          )}
          <StyledVerticalLine />
        </VerticalTitleContainer>
        <ListContainer>
          {npcs.map((npc, i) => (
            <CardSelectNpc key={npc.id} 
              npc={npc} 
              index={i} 
              setSelected={handleSelectNpc}
              isSelected={npc.id == selectedNpc.id}
            />
          ))}
        </ListContainer>
      </LeftSession>
      {!isMobile && (
        <RightSession item xs={12} lg={7}>
          <Box 
            sx={{
              margin: '2rem auto',
              width: '80%', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'start', 
              justifyContent: 'center',
            }}
          >
            <Box sx={{display: 'flex'}}>
              <StyledPhoto src={SeranaPhoto} alt={`${selectedNpc.name} photo`}/>

              <Box sx={{marginLeft: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box>
                  <Typography color="success.light" fontWeight="bold">
                    Friendly
                  </Typography>
                </Box>
                <Typography 
                  color={theme.palette.dark.dark} 
                  fontWeight="bold" 
                  fontSize="2.8rem"
                >
                  {selectedNpc.name.toUpperCase()}
                </Typography>
                <Infos 
                  npc={selectedNpc} 
                  hasTopBottomBorder={true}
                />
              </Box>
            </Box>
            <Box sx={{marginTop: '3rem', maxHeight: '22rem', overflow: 'hidden', overflowY:  'auto'}}>
              <Typography variant="body1" color={theme.palette.dark.dark} dangerouslySetInnerHTML={{ __html: selectedNpc.description }}>
              </Typography>
              <Typography variant="body1" color={theme.palette.dark.dark} dangerouslySetInnerHTML={{ __html: selectedNpc.description }}>
              </Typography>
            </Box>
            <Box sx={{marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
              <Image src={DividerImg} alt="Divider"/>
              <Typography variant="h4" color={theme.palette.dark.dark}>
                Notable Possessions/Features
              </Typography>
              <FeatureCard />
            </Box>
          </Box>
          <Box sx={{
            position: 'absolute', 
            right: '0', 
            width: '10%', 
            height: '100%', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <KeyboardDoubleArrowRightIcon sx={{fontSize: '3rem', color: theme.palette.blood.main}} />
          </Box>
        </RightSession>
      )}
    </Container>
  )
}
