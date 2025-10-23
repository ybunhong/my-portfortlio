import { Paper, Box, Typography, Link } from "@mui/material";
import contactData from "../data/contact";

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
          p: 4,
        }}
      >
        <Typography variant="h3" fontFamily={"Notable"}>
          Get In Touch
        </Typography>
        <Typography variant="subtitle2">
          I’m always open to connecting, collaborating, or answering any
          questions you have.
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          bgcolor: "#f2e8cc",
          borderRadius: 8,
          my: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {contactData.map((items) => (
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                flex: "1 1 45%",
                minWidth: "300px",
                gap: 2,
              }}
            >
              <img src={items.imageUrl} width={40} />
              <Link href={items.link} target="_Blank" color="#000000">
                {items.title}
              </Link>
            </Box>
          ))}
        </Box>
      </Paper>
    </>
  );
}
