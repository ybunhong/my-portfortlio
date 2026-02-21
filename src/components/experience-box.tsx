import { Box, Paper, Typography, Chip, Avatar, IconButton, Stack } from "@mui/material";
import { Source } from "@mui/icons-material";
import experienceData from "../data/experience-data";

interface ExperienceCardProps {
  experience: typeof experienceData[0];
}



function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "#ffffff",
        border: "1px solid #e1e4e8",
        transition: "all 0.2s ease-in-out",
        mx: 5,
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 8px 24px rgba(3, 102, 214, 0.15)",
        },
      }}
    >
      {/* Top Image Section */}
      <Box sx={{ mb: 2, width: "100%" }}>
        <img 
          src={experience.imageUrl} 
          alt={experience.title}
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
              sx={{ width: 16, height: 16, bgcolor: "primary.main",p:1 }}
            >
              {experience.title.charAt(0)}
            </Avatar>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "primary.main", 
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" }
              }}
              component="a"
              href={experience.link}
              target="_blank"
            >
              {experience.title}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontSize: "0.8rem", color: "#586069" }}>
            {experience.projectStatus} • {experience.projectContributions}
          </Typography>
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
          {experience.title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: "#586069", 
            fontSize: "0.9rem",
            lineHeight: 1.5,
            mb: 2
          }}
        >
          {experience.detailDescription}
        </Typography>
        
        {/* Contributions List */}
        {experience.contributions && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: "#24292e", fontWeight: 600, mb: 1 }}>
              Key Contributions:
            </Typography>
            {experience.contributions.map((point, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                <Typography sx={{ color: "#0366d6", fontSize: "0.8rem", mt: 0.5 }}>•</Typography>
                <Typography variant="body2" sx={{ color: "#586069", fontSize: "0.85rem", flex: 1 }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Tags Section */}
      <Box sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {experience.keyTechnologies.map((tech, index) => (
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
            label={experience.projectContributions}
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
        <Stack direction="row" spacing={1}>
          {experience.link && (
            <IconButton 
              size="small" 
              sx={{ color: "#586069" }}
              href={experience.link}
              target="_blank"
            >
              <Source sx={{ fontSize: 18 }} />
              <Typography variant="body2" sx={{ ml: 0.5, fontSize: "0.8rem" }}>View Link</Typography>
            </IconButton>
          )}
          {experience.documentLink && (
            <IconButton 
              size="small" 
              sx={{ color: "#586069" }}
              href={experience.documentLink}
              target="_blank"
            >
              <Source sx={{ fontSize: 18 }} />
              <Typography variant="body2" sx={{ ml: 0.5, fontSize: "0.8rem" }}>Document</Typography>
            </IconButton>
          )}
        </Stack>
      </Box>
    </Paper>
  );
}

export default function ExperienceBox() {
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
        My Experience
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {experienceData.map((experience, _) => (
          <ExperienceCard 
            key={experience.id} 
            experience={experience} 
          />
        ))}
      </Box>
    </>
  );
}
