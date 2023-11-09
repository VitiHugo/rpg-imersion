'use client'

import { Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from "@mui/material/styles";
import { DRAWER_WIDTH } from "./styles";
import "@/styles/global.css";

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Support', icon: PersonIcon },
  { text: 'Tasks', href: '/tasks', icon: ChecklistIcon },
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
          background: theme.palette.dark.main
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {LINKS.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} >
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              
            </ListItemButton>
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