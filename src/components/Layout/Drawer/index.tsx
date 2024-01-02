'use client'

import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import { useTheme } from "@mui/material/styles";
import { DRAWER_WIDTH } from "./styles";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Character', href: '/character/save', icon: PersonIcon },
  { text: 'NPCs', href: '/npcs', icon: GroupsIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', href: '/npcs', icon: SettingsIcon },
  { text: 'Logout', href: '/npcs', icon: LogoutIcon },
];

export function AppDrawer() {
  const theme = useTheme()

  return (
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
      variant="permanent"
      anchor="left"
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
  )
}