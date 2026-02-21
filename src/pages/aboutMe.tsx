import TimeLine from "../components/TimeLine";
import { Box, Typography } from "@mui/material";

export default function AboutMe() {
    return (
        <>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box >
                    <Typography variant="h4" sx={{fontFamily:"notable"}}>Y BUNHONG</Typography>
                    <Typography variant="subtitle1" sx={{fontFamily:"notable"}}>20 years</Typography>
                    <Typography variant="subtitle1" sx={{fontFamily:""}}>I’m a full-stack developer who loves turning ideas into real, interactive experiences. From crafting sleek front-end interfaces to building solid back-end systems, I enjoy solving problems and making tech feel a little more human. Take a look around, and you’ll see the projects I’ve poured my curiosity and passion into.</Typography>
                </Box>
                <Box>
                <img src="/hong2.jpg" width={200} style={{borderRadius:"9999px"}}/>
                </Box>
            </Box>
            <TimeLine />
        </>
    );
}