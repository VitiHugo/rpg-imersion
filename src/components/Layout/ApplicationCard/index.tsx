import { ReactNode } from "react";
import { Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { AppCard } from "./styles";

interface ApplicationCardProps {
  children: ReactNode;
}
export function ApplicationCard({ children }: ApplicationCardProps) {
  const theme = useTheme();
  const isXLUp = useMediaQuery(theme.breakpoints.up("xl"));

  if (isXLUp) 
    return (
      <AppCard variant="outlined">
        <CardContent>
          {children}
        </CardContent>
      </AppCard>
    );


  return (
    <>
    {children}
    </>
  );
}