import TimeLine from "../components/TimeLine";
import { Box, Typography } from "@mui/material";

export default function AboutMe() {
    return (
        <>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box >
                    <Typography variant="h4" sx={{fontFamily:"notable"}}>Y BUNHONG</Typography>
                    <Typography variant="subtitle1" sx={{fontFamily:"notable"}}>20 years</Typography>
                    <Typography variant="subtitle1" sx={{fontFamily:"notable"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Typography>
                </Box>
                <Box>
                <img src="/hong2.jpg" width={200} style={{borderRadius:"9999px"}}/>
                </Box>
            </Box>
            <TimeLine />
        </>
    );
}