import { Typography, Box, Button } from "@mui/material";
import ExperienceBox from "../components/experience-box";

export default function Experiences() {
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
          href="https://www.canva.com/design/DAG1x5wFi3k/QFlYPpKKKLVMardGmmVh4w/edit?utm_content=DAG1x5wFi3k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_Blank"
        >
          View my Resume
        </Button>
      </Box>
      <ExperienceBox />
    </>
  );
}
