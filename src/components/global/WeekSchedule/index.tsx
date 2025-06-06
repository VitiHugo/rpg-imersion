import { Box, Typography } from "@mui/material";
import { ClassName, DayItem, DaysContainer, TeacherName, TextContainer, WeekScheduleCard, WeekScheduleContainer } from "./styles";

const rows = [
  { day: 'Sunday',    Teacher: undefined,                   Class: undefined },
  { day: 'Monday',    Teacher: 'Yedora, Grave Gardener',    Class: 'Arcano-botany for Beginners' },
  { day: 'Tuesday',   Teacher: 'Serafina Onyx',             Class: 'Basic Magical Auras' },
  { day: 'Wednesday', Teacher: 'Adrix and Nev',             Class: 'Beginning Computational Magic' },
  { day: 'Thursday',  Teacher: 'Breena',                    Class: 'Beginning Inkomancy' },
  { day: 'Friday',    Teacher: 'Ulvida Mistcoiler',         Class: 'History of Magic and Art' },
  { day: 'Saturday',  Teacher: 'Tullus',                    Class: 'Introduction to Archeomancy' }
];

export function WeekSchedule() {
  return (
    <WeekScheduleContainer>
      <WeekScheduleCard sx={{boxShadow: 3}}>
        <DaysContainer>
          {rows.map(day => (
            <DayItem key={day}>
              <Box sx={{borderBottom: '1px solid #fff', paddingBottom: '.8rem', textAlign: 'center'}}>
                <Typography color='#fff'>
                  {day.day}
                </Typography>
              </Box>
              <TextContainer>
                <ClassName href="" content={day.Class}>
                  {day.Class || 'No class scheduled'}
                </ClassName>
              </TextContainer>
              <TextContainer sx={{ marginTop: 3 }}>
                <TeacherName href="" content={day.Teacher}>
                  {day.Teacher || 'No teacher assigned'}
                </TeacherName>
              </TextContainer>
            </DayItem>
          ))}
        </DaysContainer>
      </WeekScheduleCard>
    </WeekScheduleContainer>
  )
}