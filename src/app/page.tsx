'use client'

import Image from "next/image";
import { Box, Modal } from "@mui/material";
import { WeekResume } from "@/components/global/WeekResume";
import { CharacterPin, CharacterPinImage, EventPin, LocationPin, MainContainer } from "./styles";
import SeranaPhoto from "@/assets/images/serana-photo.png";
import WhiterBloomImage from "@/assets/images/whiterbloom.jpg";
import { useState } from "react";
import { CharacterDetail } from "@/components/global/CharacterDetail";
import { LocationDetail } from "@/components/global/LocationDetail";
import Map from "@/assets/images/strixhaven-map.jpeg"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { EventDetail } from "@/components/global/EventDetail";

export default function Home() {
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  // const Map = dynamic(() => import('../components/Map'), { 
  //   ssr: false,
  // })

  return (
    <MainContainer>

      <WeekResume />
      {/* <Map 
        setIsCharacterModalOpen={setIsCharacterModalOpen}
        setIsLocationModalOpen={setIsLocationModalOpen}
      /> */}
      <Box sx={{width: '100%', height: '100vh', position: 'relative'}}>
        <Image 
          alt="Main map"
          src={Map}
          style={{ height: '100vh', width: '100%' }}
        />
        <CharacterPin onClick={() => setIsCharacterModalOpen(true)}>
          <CharacterPinImage src={SeranaPhoto} alt="Serana Photo"/>
        </CharacterPin>
        <LocationPin onClick={() => setIsLocationModalOpen(true)}>
          <CharacterPinImage src={WhiterBloomImage} alt="Serana Photo"/>
        </LocationPin>
        <EventPin onClick={() => setIsEventModalOpen(true)}>
          <PriorityHighIcon />
        </EventPin>
      </Box>
      <Modal
        open={isCharacterModalOpen}
        onClose={() => setIsCharacterModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CharacterDetail />
      </Modal>
      <Modal
        open={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LocationDetail />
      </Modal>
      <Modal
        open={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EventDetail />
      </Modal>
    </MainContainer>
  )
}
