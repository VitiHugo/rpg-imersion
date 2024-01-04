'use client'

import { Container, StyledDivider, StyledPhoto } from "../styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Npc } from "@/models/model";
import { Infos } from "../components/Infos";
import { FeatureCard } from "../components/FeatureCard";
import SeranaPhoto from "@/assets/images/serana-photo.png"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from "next/image";
import DividerImg from "@/assets/images/divider 1.png";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const areas = [{
  id: 1,
  name: 'Strixhaven'
},{
  id: 2,
  name: 'Sigil'
}]

const npcs = {
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
} as Npc

export default function NpcPage({ params }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const router = useRouter();
  
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <ArrowBackIosNewIcon onClick={() => router.back()}/>
      <Box 
        sx={{
          margin: '2rem auto',
          width: '80%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <StyledPhoto src={SeranaPhoto} alt={`${npcs.name} photo`}/>

          <Box sx={{marginLeft: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            
            <Typography 
              color={theme.palette.dark.dark} 
              fontWeight="bold" 
              fontSize="2rem"
            >
              {npcs.name.toUpperCase()}
            </Typography>
            <Box>
              <Typography color="success.light" fontWeight="bold">
                Friendly
              </Typography>
            </Box>
            <Infos 
              npc={npcs} 
              hasTopBottomBorder={true}
            />
          </Box>
        </Box>
        <Box sx={{marginTop: '3rem', maxHeight: '22rem', overflow: 'hidden', overflowY:  'auto'}}>
          <Typography variant="body1" color={theme.palette.dark.dark} dangerouslySetInnerHTML={{ __html: npcs.description }}>
          </Typography>
          <Typography variant="body1" color={theme.palette.dark.dark} dangerouslySetInnerHTML={{ __html: npcs.description }}>
          </Typography>
        </Box>
        <Box sx={{marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
          <StyledDivider src={DividerImg} alt="Divider"/>
          <Typography variant="h4" fontSize="1.5rem" fontWeight="bold" mb={2} color={theme.palette.dark.dark}>
            Notable Features
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
    </Box>
  )
}
