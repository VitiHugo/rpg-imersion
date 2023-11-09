import { Box, Typography } from "@mui/material";
import { DayItem, DaysContainer, TeacherName, TextContainer, WeekScheduleCard, WeekScheduleContainer } from "./styles";

const rows = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export function WeekSchedule() {
  return (
    <WeekScheduleContainer>
      <WeekScheduleCard sx={{boxShadow: 3}}>
        <DaysContainer>
          {rows.map(day => (
            <DayItem key={day}>
              <Box sx={{borderBottom: 1, paddingBottom: '.8rem', textAlign: 'center'}}>
                <Typography color='#fff'>
                  {day}
                </Typography>
              </Box>
              <TextContainer>
                <Typography color='#fff'>Arcano-botany for Beginners</Typography>
              </TextContainer>
              <TextContainer sx={{ marginTop: 3 }}>
                <TeacherName href="">Yedora, Grave Gardener</TeacherName>
              </TextContainer>
            </DayItem>
          ))}
        </DaysContainer>
      </WeekScheduleCard>
    </WeekScheduleContainer>
  )
}