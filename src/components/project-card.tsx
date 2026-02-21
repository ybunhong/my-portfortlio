import { Paper, Typography, Box, Chip, Avatar, IconButton, Stack } from "@mui/material";
import { Source } from "@mui/icons-material";
import experienceData from "../data/experience-data";

interface ProjectCardProps {
  project: typeof experienceData[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "#ffffff",
        border: "1px solid #e1e4e8",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 8px 24px rgba(3, 102, 214, 0.15)",
        },
        mx:5
      }}
    >
      {/* Top Image Section */}
      <Box sx={{ mb: 2, width: "100%" }}>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            backgroundColor: "#f6f8fa"
          }}
        />
      </Box>

      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Avatar 
              sx={{ width: 16, height: 16, bgcolor: "#0366d6",p:1 }}
            >
              {project.title.charAt(0)}
            </Avatar>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#0366d6", 
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" }
              }}
              component="a"
              href={project.link}
              target="_blank"
            >
              {project.title}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Description Section */}
      <Box sx={{ mb: 3 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: "#24292e", 
            fontSize: "1.1rem",
            fontWeight: 600,
            mb: 1
          }}
        >
          {project.title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: "#586069", 
            fontSize: "0.9rem",
            lineHeight: 1.5
          }}
        >
          {project.overviewDescription}
        </Typography>
      </Box>

      {/* Tags Section */}
      <Box sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {project.keyTechnologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: "#f6f8fa",
                color: "#0366d6",
                border: "1px solid #e1e4e8",
                fontSize: "0.75rem",
                height: 24,
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Footer Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label="GitHub"
            size="small"
            sx={{
              backgroundColor: "#9be9a8",
              color: "#24292e",
              fontWeight: 600,
              fontSize: "0.7rem",
              height: 20,
            }}
          />
          <Chip
            label={project.projectContributions}
            size="small"
            sx={{
              backgroundColor: "#f778ba",
              color: "#24292e",
              fontWeight: 600,
              fontSize: "0.7rem",
              height: 20,
            }}
          />
        </Stack>
        <IconButton 
          size="small" 
          sx={{ color: "#586069" }}
          href={project.link}
          target="_blank"
        >
          <Source sx={{ fontSize: 18 }} />
          <Typography variant="body2" sx={{ ml: 0.5, fontSize: "0.8rem" }}>View Link</Typography>
        </IconButton>
      </Box>
    </Paper>
  );
}

export default function ProjectCardList() {
  return (
    <>
      <Typography
        variant="h3"
        fontFamily={"notable"}
        sx={{
          textAlign: "center",
          p: 4,
          color: "#24292e",
        }}
      >
        My Project
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {experienceData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </Box>
    </>
  );
}
