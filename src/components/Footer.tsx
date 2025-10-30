import { Box, Typography } from "@mui/material";
import contactData from "../data/contact";

export default function Footer() {
  return (
    <>
      <footer>
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              bgcolor: "#00CA72",
              justifyContent: "space-between",
              p: 3,
              gap: 2,
              borderRadius: 8,
              boxShadow: 6,
              flexDirection: {
                xs:"column",
                md:"row"
              },
            }}
          >
            <Typography fontFamily={"notable"}>Contact me at</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {contactData.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.link || "#"}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    fontSize: "24px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <img src={contact.imageUrl} width="28" alt={contact.title} />
                </a>
              ))}
            </Box>
          </Box>

          <Typography variant="subtitle2" color="#000000">
            © 2024 My Portfolio. All rights reserved.
          </Typography>
        </Box>
      </footer>
    </>
  );
}
