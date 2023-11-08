import Image from "next/image";
import Map from "@/assets/images/strixhaven-map.jpeg"
import { Box } from "@mui/material";
import { WeekResume } from "@/components/WeekResume";

export default function Home() {
  return (
    <main >
      <WeekResume />
      <Box sx={{width: '100%', height: '100vh', position: 'relative'}}>
        <Image 
          alt="Main map"
          src={Map} 
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: '100vh', width: '100%' }}
        />
      </Box>
    </main>
  )
}
