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
          textAlign: "center",
          alignItems: "center",
          gap: 4,
          my: 8,
        }}
      >
        <Typography variant="h6">
          Here, you can know me a little more and see my whole experience as a
          Developer.
        </Typography>
        <Button
          variant="contained"
          href="https://drive.google.com/file/d/1ouUFUnpHsYuJ7z0sYyrK6SWSBs85gaKe/view?usp=sharing"
          target="_Blank"
        >
          View my Resume
        </Button>
        <Button
          variant="contained"
          onClick={hadnleDownload}
        >
          Download my Resume
        </Button>
      </Box>
      <ExperienceBox />
    </>
  );
}
