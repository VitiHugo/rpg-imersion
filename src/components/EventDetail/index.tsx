import { Box, Divider, Typography } from "@mui/material";
import { CharacterDetailContainer, CharacterImage, CharacterNameContainer, EventCard, EventImage } from "./styles";
import { useTheme  } from "@mui/material/styles";
import DemongorgonEventImage from "@/assets/images/demongorgon-event-image.jpg";
import ProfessorOnyxPhoto from "@/assets/images/professorOnyx-photo.png";

export function EventDetail() {
  const theme = useTheme();
  return (
    <CharacterDetailContainer>
      <CharacterImage sx={{backgroundImage: `url(${ProfessorOnyxPhoto.src})`}}>
        <CharacterNameContainer>
          <Typography fontSize="1.5rem">
            Serafina Onyx
          </Typography>
        </CharacterNameContainer>
      </CharacterImage>
      <Box sx={{padding: '.7rem 1rem'}}>
        <Typography textAlign="center" fontSize=".9rem">
          A Professora Onyx é uma feiticeira misteriosa e icônica de Strixhaven. Vestida em trajes negros e enfeitada com ornamentos dourados,
          sua presença é imponente. Seu olhar penetrante e conhecimento profundo das artes negras a tornam uma figura respeitada e temida no colégio.
        </Typography>
      </Box>
      <Divider />
      <Typography textAlign="center" variant="h3" fontSize="1.5rem">Events</Typography>
      <Box
        sx={{padding: '1rem', maxHeight: '17rem', overflow: 'hidden', overflowY: 'auto', scrollbarColor: '#000 #d738'}}
      >
        <EventCard>
          <EventImage src={DemongorgonEventImage} alt="Demongorgon Fight Event"/>
          <Box sx={{padding: '0 .7rem'}}>
            <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">Fight against Demongordon</Typography>
            <Typography fontSize=".8rem" sx={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
              The characters helped onyx fight an old enemy of her. The players used this opportunity to learn more abouther past too.
            </Typography>
          </Box>
        </EventCard>
        <EventCard>
          <EventImage src={DemongorgonEventImage} alt="Demongorgon Fight Event"/>
          <Box sx={{padding: '0 .7rem'}}>
            <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">Fight against Demongordon</Typography>
            <Typography fontSize=".8rem" sx={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
              The characters helped onyx fight an old enemy of her. The players used this opportunity to learn more abouther past too.
            </Typography>
          </Box>
        </EventCard>
        <EventCard>
          <EventImage src={DemongorgonEventImage} alt="Demongorgon Fight Event"/>
          <Box sx={{padding: '0 .7rem'}}>
            <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">Fight against Demongordon</Typography>
            <Typography fontSize=".8rem" sx={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
              The characters helped onyx fight an old enemy of her. The players used this opportunity to learn more abouther past too.
            </Typography>
          </Box>
        </EventCard>
      </Box>
    </CharacterDetailContainer>
  );
} 