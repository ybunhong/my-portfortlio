import { Box, Typography, Paper, Stack } from "@mui/material";
import techSkills from "../data/tech-data";

export default function Techbox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          textAlign: "center",
          padding: 8,
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: "Notable", color: "#24292e" }}>
          My Tech Skill
        </Typography>
        <Typography variant="h6" sx={{ color: "#586069", maxWidth: 600 }}>
          I build dynamic, high-performance web applications ,emphasizing responsive design and seamless user experience. I enjoy turning complex problems into simple, elegant solutions.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {techSkills.map((items) => (
              <Paper
                elevation={2}
                key={items.id}
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  borderRadius: 2,
                  bgcolor: "#ffffff",
                  border: "1px solid #e1e4e8",
                  transition: "all 0.2s ease-in-out",
                  minWidth: 100,
                  maxWidth: 100,
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: "0 8px 24px rgba(32, 177, 90, 0.15)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#f6f8fa",
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <img 
                    src={items.imageUrl} 
                    alt={items.tech}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "#24292e", 
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: 1.2
                  }}
                >
                  {items.tech}
                </Typography>
                
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
