'use client'

import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import { useTheme } from "@mui/material/styles";
import { DRAWER_WIDTH, TopBar } from "./styles";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import FlashOnIcon from '@mui/icons-material/FlashOn';

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Character', href: '/character/save', icon: PersonIcon },
  { text: 'NPCs', href: '/npcs', icon: GroupsIcon },
  { text: 'Events', href: '/event/save', icon: FlashOnIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', href: '/npcs', icon: SettingsIcon },
  { text: 'Logout', href: '/npcs', icon: LogoutIcon },
];

interface Props {}

export function AppDrawer({  }: Props) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if(matches){
      setIsOpen(!matches);
      setIsMobile(matches);
    }
    else {
      setIsOpen(true);
      setIsMobile(false);
    }
  }, [matches]);

  function handleOpenMenu() {
    setIsOpen(!isOpen)
  };

  return (
    <>
      { isMobile && (
        <TopBar onClick={handleOpenMenu}>
          <MenuIcon sx={{color: theme.palette.blood.text, fontSize: '2rem'}} />
        </TopBar>
      )}
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            height: 'auto',
            bottom: 0,
            background: theme.palette.dark.dark
          },
        }}
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="left"
        open={isOpen}
        onClose={handleOpenMenu}
      >
        <List>
          <ListItem sx={{display: 'flex', justifyContent: 'center'}}>
            <Image alt="App logo" src="/img/logo.png" width={50} height={50}/>
          </ListItem>
          {LINKS.map(({ text, href, icon: Icon }, i) => (
            <ListItem key={`${i}-${href}-menu`} sx={{display: 'flex', justifyContent: 'center'}}>
              <Link href={href}>
                <Icon sx={{color: theme.palette.blood.text}}/>                
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 'auto' }} />
        <List>
          {PLACEHOLDER_LINKS.map(({ text, icon: Icon, href }, i) => (
            <ListItem key={`${i}-${href}-menu`} sx={{display: 'flex', justifyContent: 'center'}}>
              <Link href={href}>
                <Icon sx={{color: theme.palette.blood.text}}/>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};