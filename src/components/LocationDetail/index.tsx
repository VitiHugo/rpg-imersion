import { Box, Divider, Typography, Tabs, Tab, AppBar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container, LocationImage, LocationNameContainer } from "./styles";
import { useState } from "react";
import { EventCard, EventImage } from "../CharacterDetail/styles";
import WhiterBloomImage from "@/assets/images/whiterbloom.jpg"
import ArenaImage from "@/assets/images/arena-image.jpg";
import DemongorgonEventImage from "@/assets/images/demongorgon-event-image.jpg";
import { TabPanel, a11yProps } from "../TabPanel";

export function LocationDetail() {
  const [tabId, setTabId] = useState(1);

  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabId(newValue);
  };

  return (
    <Container>
      <LocationImage sx={{backgroundImage: `url(${ArenaImage.src})`}}>
        <LocationNameContainer>
          <Typography fontSize="1.5rem">
            Arena
          </Typography>
        </LocationNameContainer>
      </LocationImage>
      <Box sx={{padding: '.7rem 1rem'}}>
        <Typography textAlign="center" fontSize=".9rem">
          O Estádio de Strixhaven é uma grandiosa arena mágica que serve como o epicentro de competições, 
          duelos e eventos extraordinários para os estudantes desta prestigiada universidade. 
          Elevando-se majestosamente no campus, o estádio é uma sinfonia arquitetônica de torres 
          altas e grandiosas, projetado para misturar a elegância clássica com uma vibe mágica 
          contemporânea.
        </Typography>
      </Box>
      <Divider sx={{margin: '.7rem 0'}}/>
      <Box sx={{ width: '100%', padding: '1rem', maxHeight: '15rem', overflow: 'hidden', overflowY: 'scroll'}}>
        <Box sx={{color: theme.palette.dark.light, display: 'flex', justifyContent: 'center'}}>
          <Tabs
            value={tabId}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: theme.palette.blood.main
              }
            }}
            textColor="inherit"
            aria-label="full width tabs example"
          >
            <Tab label="Activities" {...a11yProps(0)} />
            <Tab label="Events" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tabId} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={tabId} index={1} dir={theme.direction}>
          <EventCard elevation={4}>
            <EventImage src={DemongorgonEventImage} alt="Demongorgon Fight Event"/>
            <Box sx={{padding: '0 .7rem'}}>
              <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">Fight against Demongordon</Typography>
              <Typography fontSize=".8rem" sx={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                The characters helped onyx fight an old enemy of her. The players used this opportunity to learn more abouther past too.
              </Typography>
            </Box>
          </EventCard>
          <EventCard elevation={4}>
            <EventImage src={DemongorgonEventImage} alt="Demongorgon Fight Event"/>
            <Box sx={{padding: '0 .7rem'}}>
              <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">Fight against Demongordon</Typography>
              <Typography fontSize=".8rem" sx={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                The characters helped onyx fight an old enemy of her. The players used this opportunity to learn more abouther past too.
              </Typography>
            </Box>
          </EventCard>
          <EventCard elevation={4}>
            <EventImage src={DemongorgonEventImage} alt="Demongorgon Fight Event"/>
            <Box sx={{padding: '0 .7rem'}}>
              <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">Fight against Demongordon</Typography>
              <Typography fontSize=".8rem" sx={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                The characters helped onyx fight an old enemy of her. The players used this opportunity to learn more abouther past too.
              </Typography>
            </Box>
          </EventCard>
        </TabPanel>
      </Box>
    </Container>
  )
}