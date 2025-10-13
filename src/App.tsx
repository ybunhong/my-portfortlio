import { Box, Button, Container, Paper, Typography } from "@mui/material";

const aboutMe = ["Contact", "Socials", "Project"];

export default function App() {
  return (
    <>
      <Container sx={{ bgcolor: "cyan", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="h1">About me</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              p: 2,
              gap: 2,
            }}
          >
            {aboutMe.map((item) => (
              <Paper
                elevation={3}
                sx={{ p: 2, width: { xs: "100%", md: "30%" } }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "tomato", fontWeight: 600 }}
                >
                  {item}
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi, illum molestiae ducimus aperiam fugit ab. Corporis quis
                  dignissimos magnam reiciendis, repudiandae praesentium, nihil
                  inventore maiores tempora temporibus obcaecati numquam?
                </Typography>

                <Button variant="contained" sx={{ mt: 2 }}>
                  Hi brother
                </Button>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
