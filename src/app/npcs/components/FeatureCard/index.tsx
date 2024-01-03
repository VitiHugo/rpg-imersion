import { useTheme } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EvilEyeImg from '@/assets/images/EvilEye.png';
import { Box } from "@mui/material";
import { Container } from "./styles";

interface Props {}

export function FeatureCard({  }: Props) {
  const theme = useTheme();

  return (
    <Container sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="60"
        image={EvilEyeImg.src}
      />
      <Box sx={{background: theme.palette.dark.dark, textAlign: 'center', padding: '.7rem'}}>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold" fontSize="1.2rem" m={0}>
          The Evil Eye
        </Typography>
      </Box>
    </Container>
  )
}