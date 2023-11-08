'use client'

import { Box, Divider, Modal, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { WeekResumeContainer } from "./styles";
import { useState } from "react";
import { WeekSchedule } from "../WeekSchedule";
import CancelIcon from '@mui/icons-material/Cancel';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export function WeekResume() {
  const [scheduleModalIsOpen, setScheduleModalIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <WeekResumeContainer sx={{boxShadow: 3}}>
        <Typography color={theme.palette.white.main}>
          29, Wednesday
        </Typography>
        <Divider orientation="vertical" flexItem sx={{borderRightWidth: 3, margin: "0 1.5rem 0 .5rem"}}/>
        <Stack
          spacing={"1rem"} 
          direction={"row"} 
          divider={
            <Divider orientation="vertical" flexItem sx={{borderRightWidth: 3}}/>
          }
        >
          <CancelIcon sx={{color: theme.palette.white.main}}/>
          <CancelIcon sx={{color: theme.palette.white.main}}/>
          <MenuBookIcon 
            onClick={() => setScheduleModalIsOpen(true)}
            sx={{color: theme.palette.white.main, cursor: "pointer"}}
          />
        </Stack>
      </WeekResumeContainer>
      <Modal
        open={scheduleModalIsOpen}
        onClose={() => setScheduleModalIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WeekSchedule />
      </Modal>
    </>
  )
}