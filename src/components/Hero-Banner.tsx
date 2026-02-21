import { Box, Container, Typography, Link } from "@mui/material";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function HeroBanner() {
  const typingTexts = [
    "Asks 'why' before coding",
    "Builds with purpose", 
    "Writes clean solutions",
    "Thinks before implementing"
  ];
  
  const typedText = useTypingEffect({ texts: typingTexts });

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
              <Typography variant="h2" sx={{ minHeight: "1.2em" }}>
                {typedText}
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    width: "3px",
                    height: "1.2em",
                    backgroundColor: "primary.main",
                    marginLeft: "2px",
                    animation: "blink 1s infinite",
                    "@keyframes blink": {
                      "0%, 50%": { opacity: 1 },
                      "51%, 100%": { opacity: 0 },
                    },
                  }}
                />
              </Typography>
              <Typography variant="h6">
                Reminds that tech evolves fast, writes smarter solutions
              </Typography>
              <Link
                href="https://www.notion.so/Career-Tracking-2bae41e9446380dabc8bd7d2cf0dbe98?source=copy_link"
                target="_blank"
                sx={{ 
                  color: "primary.main",
                  "&:hover": { textDecoration: "underline" }
                }}
              >
                Check out my Notion
              </Link>
            </Box>
          </Box>
          <Typography variant="h6" display={{ xs: "none", md: "block" }}>
            Passionate about building efficient, user-focused applications and
            writing code that is both functional and maintainable. Enjoys
            collaborating with teams to turn ideas into well-crafted experiences
          </Typography>
        </Box>
      </Container>
    </>
  );
}
