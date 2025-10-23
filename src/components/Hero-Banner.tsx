import { Box, Container, Typography } from "@mui/material";

export default function HeroBanner() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            my: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <img src="/banner.png" width="165px" height="220px" />
            <Box>
              <Typography variant="h6">A Developer who</Typography>
              <Typography variant="h2">Asks ‘why’ before coding</Typography>
              <Typography variant="h6">
                Reminds that tech evolves fast, writes smarter solutions
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6">
            Passionate about building efficient, user-focused applications and
            writing code that is both functional and maintainable. Enjoys
            collaborating with teams to turn ideas into well-crafted digital
            experiences while constantly improving technical and design skills.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
