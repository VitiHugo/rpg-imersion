import { Box, Typography } from "@mui/material";
import { DayItem, DaysContainer, WeekScheduleCard, WeekScheduleContainer } from "./styles";

const rows = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export function WeekSchedule() {
  return (
    <WeekScheduleContainer>
      <WeekScheduleCard sx={{boxShadow: 3}}>
        <DaysContainer>
          {rows.map(day => (
            <DayItem>
              <Box sx={{borderBottom: 1, paddingBottom: '.8rem', textAlign: 'center'}}>
                <Typography color='#fff'>
                  {day}
                </Typography>
              </Box>
              <Box sx={{textAlign: 'center', paddingTop: '.5rem'}}>
                <Typography color='#fff'>Arcano-botany for Beginners</Typography>
              </Box>
              <Box sx={{textAlign: 'center', marginTop: 3}}>
                <Typography>Yedora, Grave Gardener</Typography>
              </Box>
            </DayItem>
          ))}
        </DaysContainer>
      </WeekScheduleCard>
    </WeekScheduleContainer>
  )
}