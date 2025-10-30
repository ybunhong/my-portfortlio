import { Button, Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import experienceData from "../data/experience-data";

export default function ProjectCard() {
  return (
    <>
      <Typography
        variant="h3"
        fontFamily={"notable"}
        sx={{
          textAlign: "center",
          p: 4,
        }}
      >
        My Project
      </Typography>
      {experienceData.map((project) => (
        <Paper
          key={project.id}
          elevation={3}
          sx={{
            marginBottom: 6,
            padding: { xs: 3, md: 6 },
            borderRadius: 14,
            bgcolor: "#f2e8cc",
            boxShadow: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, md: 8 },
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 4 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h4" sx={{ fontFamily: "Notable" }}>
                  {project.title}
                </Typography>
                <Typography variant="h6">
                  {project.overviewDescription}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{ mt: 2, maxWidth: 150 }}
                  href={project.link}
                  target="_Blank"
                >
                  Website Link
                </Button>
                <Link
                  to="/experiences"
                  style={{
                    color: "primary.main",
                    marginTop: "16px",
                  }}
                >
                  View more
                </Link>
              </Box>
            </Box>
            <img src={project.imageUrl} width="500"></img>
          </Box>
        </Paper>
      ))}
    </>
  );
}
