import { Box, Button, Divider, Typography } from "@mui/material";
import { DialogCard, DialogImage, EventDetailContainer, EventModalImage, EventTitleContainer } from "./styles";
import { useTheme  } from "@mui/material/styles";
import DemongorgonEventImage from "@/assets/images/demongorgon-event-image.jpg";
import ProfessorOnyxPhoto from "@/assets/images/professorOnyx-photo.png";
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import Image from "next/image";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export function EventDetail() {
  const theme = useTheme();
  return (
    <EventDetailContainer>
      <EventModalImage sx={{backgroundImage: `url(${ProfessorOnyxPhoto.src})`}}>
        <EventTitleContainer>
          <Typography fontSize="1.5rem">
            Mathemagic Homework
          </Typography>
        </EventTitleContainer>
      </EventModalImage>
      <Box sx={{padding: '.7rem 1rem'}}>
        {/* {dialogs.map(() => {})} */}
        <DialogCard>
          <DialogImage src={ProfessorOnyxPhoto} alt="dialog 1 image" />
          
          <ArrowRightSharpIcon sx={{display: {xs: 'none', md: 'inherit', fontSize: '4rem', color: theme.palette.dark.lighter}}}/>
          <Typography>
            <b>Adrix:</b> Nev, I was thinking of spicing things up for the students' next assignment. How about a homework on manipulating a 
            firebolt spell in the gym?
            <br />
            <b>Nev:</b> Firebolt, Adrix? In the gym? That sounds like a recipe for disaster. 
            <br />
            <b>Adrix:</b> Oh, come on, Nev! It'll be a controlled exercise in precision and focus. What could possibly go wrong? 
            <br />
            <b>Nev:</b> Famous last words, Adrix. Fine, let's hope our students have a good grasp of both magic and fire safety.
          </Typography>
        </DialogCard>
        <Box>
          
        </Box>
        <Button 
          sx={{marginTop: '1rem'}}
          startIcon={<PersonAddIcon />}
          variant="contained" 
          color="success"
        >Accept Event</Button>
      </Box>
    </EventDetailContainer>
  );
} 