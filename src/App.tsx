import { Box, Typography, Container } from "@mui/material";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Typography variant="h3">I'm a Software Developer.|</Typography>
          <Typography>Currently. I'm unemployed</Typography>
        </Box>
      </Container>
    </>
  );
}
