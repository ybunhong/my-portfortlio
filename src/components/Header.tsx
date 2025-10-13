import { Box, Container, Typography } from "@mui/material";

const headerContent = ["Home", "About", "Contact"];
export default function Header() {
  return (
    <>
      <Container sx={{ bgcolor: "cyan", height: "fit-content", p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <img src="/vite.svg" width="35" height="35" />
          </Box>
          <Box sx={{ display: "flex", gap: 4 }}>
            {headerContent.map((items: string) => (
              <Typography variant="h5" key={items}>
                {items}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
