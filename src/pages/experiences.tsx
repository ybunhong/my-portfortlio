import { Typography, Box, Button } from "@mui/material";
import ExperienceBox from "../components/experience-box";
import {saveAs} from "file-saver";

export default function Experiences() {

  const hadnleDownload = () => {
    saveAs("https://drive.google.com/file/d/1ouUFUnpHsYuJ7z0sYyrK6SWSBs85gaKe/view?usp=sharing", "Y Bunhong's Resume.pdf");
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 4,
          my: 8,
        }}
      >
        <Typography variant="h6" sx={{display:'flex', justifyContent:'center', textAlign: 'center'}}>
          Here, you can know me a little more and see my whole experience as a
          Developer.
        </Typography>
        <Box sx={{display: 'flex', gap: 2, justifyContent: 'center'}}>
          <Button
          variant="contained"
          color="primary"
          href="https://drive.google.com/file/d/1ouUFUnpHsYuJ7z0sYyrK6SWSBs85gaKe/view?usp=sharing"
          target="_Blank"
        >
          View my Resume
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={hadnleDownload}
        >
          Download my Resume
        </Button>
        </Box>
        
        <ExperienceBox />
      </Box>
    </>
  );
}
