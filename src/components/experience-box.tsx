import { Box, Button, Paper, Typography } from "@mui/material";
import experienceData from "../data/experience-data";
export default function ExperienceBox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          mb: 8,
        }}
      >
        {experienceData.map((items) => (
          <Paper
            elevation={9}
            key={items.id}
            sx={{
              display: "flex",
              bgcolor: "#f2e8cc",
              padding: 4,
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
              },
              gap: 4,
              borderRadius: 8,
            }}
          >
            {/* ----------------------Project Info--------------------- */}
            <Box
              sx={{
                minWidth: 300,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h5" color="primary.main">
                {items.title}
              </Typography>

              <Typography fontWeight={600} color="rgb(0,0,0,0.7)">
                {items.projectStatus}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  maxWidth: 150,
                }}
                href={items.link}
                target="_Blank"
              >
                Link Website
              </Button>
            </Box>

            {/* ----------------------Project Detail--------------------- */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography variant="h6" color="primary.main">
                  {items.projectContributions}
                </Typography>
                <Typography variant="subtitle1" color="rgb(0,0,0,0.5)">
                  {items.keyTechnologies?.join(", ")}
                </Typography>
              </Box>
              <Typography>{items.detailDescription}</Typography>
              <Typography variant="subtitle2" color="rgb(0,0,0,0.75)">
                {items.contributions?.map((point) => (
                  <Box
                    sx={{
                      py: 1,
                    }}
                  >
                    <li key={point}>{point}</li>
                  </Box>
                ))}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  );
}
