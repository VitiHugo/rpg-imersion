'use client'

import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import { useTheme } from "@mui/material/styles";
import { DRAWER_WIDTH } from "./styles";
import "@/styles/global.css";
import Link from "next/link";

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Support', href: '/', icon: PersonIcon },
  { text: 'NPCs', href: '/npcs', icon: GroupsIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Logout', icon: LogoutIcon },
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
        {LINKS.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} >
            <Link href={href}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: 'auto' }} />
      <List>
        {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}