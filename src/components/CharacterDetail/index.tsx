import { Box, Divider, Typography } from "@mui/material";
import { CharacterDetailContainer, CharacterImage, EventImage } from "./styles";
import DemongorgonEventImage from "@/assets/images/demongorgon-event-image.jpg";
import ProfessorOnyxPhoto from "@/assets/images/professorOnyx-photo.png";

export function CharacterDetail() {
  return (
    <CharacterDetailContainer>
      <Typography>
        Serafina Onyx
      </Typography>
      <CharacterImage src={ProfessorOnyxPhoto} alt="Professor Onyx Photo"/>
      <Typography>
        A Professora Onyx é uma feiticeira misteriosa e icônica de Strixhaven. Vestida em trajes negros e enfeitada com ornamentos dourados,
        sua presença é imponente. Seu olhar penetrante e conhecimento profundo das artes negras a tornam uma figura respeitada e temida no colégio.
      </Typography>
      <Divider />
      <Typography>Events</Typography>
      <Box>
        <EventImage src={DemongorgonEventImage} alt="Demongorgon Fight Event"/>
        <Box>
          <Typography>Fight against Demongordon</Typography>
          <Typography>The characters helped onyx fight an old enemy of her. The players used this opportunity to learn more abouther past too.</Typography>
        </Box>
      </Box>
    </CharacterDetailContainer>
  );
} 