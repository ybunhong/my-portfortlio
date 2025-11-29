import { Box, Container, Typography, Link } from "@mui/material";

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
              gap: { xs: 2, md: 4 },
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <img src="/banner.png" width="165px" height="220px" />
            <Box>
              <Typography variant="h6">A Developer who</Typography>
              <Typography variant="h2">Asks ‘why’ before coding</Typography>
              <Typography variant="h6">
                Reminds that tech evolves fast, writes smarter solutions
              </Typography>
              <Link
                href="https://www.notion.so/Career-Tracking-2bae41e9446380dabc8bd7d2cf0dbe98?source=copy_link"
                target="_blank"
              >
                Check out my Notion
              </Link>
            </Box>
          </Box>
          <Typography variant="h6">
            Passionate about building efficient, user-focused applications and
            writing code that is both functional and maintainable. Enjoys
            collaborating with teams to turn ideas into well-crafted experiences
          </Typography>
        </Box>
      </Container>
    </>
  );
}
