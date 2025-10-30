import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes/index";


export default function App() {
  return (
    <>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Router />
        <Footer />
      </Container>
    </>
  );
}
