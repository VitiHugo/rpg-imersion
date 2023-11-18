import * as React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/styles/themeRegistry';
import { AppDrawer } from '@/components/Layout/Drawer';
import { DRAWER_WIDTH } from '@/components/Layout/Drawer/styles';
import { GlobalStyles } from '@mui/material';

export const metadata = {
  title: 'RPG Imersion',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <GlobalStyles
        styles={{
          '*::-webkit-scrollbar': {
            width: '0.4em',
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: '#E6E6E6',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#585858',
            outline: '1px solid slategrey',
            borderRadius: '5px',
          },
          'html, body, main': {
            overflow: 'auto'
          },
          '.leaflet-container': {
            background: '#ffe4c9 !important'
          }
        }}
      />
      <body>
        <ThemeRegistry>
          <AppDrawer />          
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: DRAWER_WIDTH,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}