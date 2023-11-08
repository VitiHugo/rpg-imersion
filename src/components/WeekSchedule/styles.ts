import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WeekScheduleContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

export const WeekScheduleCard = styled(Box)(({ theme }) => ({
  background: theme.palette.dark.main,
  borderRadius: '10px',
}));

export const DaysContainer = styled(Box)(({ theme }) => ({
  display: 'flex'
}));

export const DayItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', 
  width: '11rem',
  padding: '1rem 0',

  '& + &': {
    borderLeft: `.5px solid #fff`
  }
}));
