'use client'

import Image from "next/image";
import Map from "@/assets/images/strixhaven-map.jpeg"
import { Box, Modal } from "@mui/material";
import { WeekResume } from "@/components/WeekResume";
import { CharacterPin, CharacterPinImage } from "./styles";
import SeranaPhoto from "@/assets/images/serana-photo.png"
import { useState } from "react";
import { CharacterDetail } from "@/components/CharacterDetail";

export default function Home() {
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);

  return (
    <main >
      <WeekResume />
      <Box sx={{width: '100%', height: '100vh', position: 'relative'}}>
        <Image 
          alt="Main map"
          src={Map} 
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: '100vh', width: '100%' }}
        />
        <CharacterPin onClick={() => setIsCharacterModalOpen(true)}>
          <CharacterPinImage src={SeranaPhoto} alt="Serana Photo"/>
        </CharacterPin>
      </Box>
      <Modal
        open={isCharacterModalOpen}
        onClose={() => setIsCharacterModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CharacterDetail />
      </Modal>
    </main>
  )
}
