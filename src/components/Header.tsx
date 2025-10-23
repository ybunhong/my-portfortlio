import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const headerContent = [
  {
    title: "Home",
    link: "/",
  },
  { title: "Experiences", link: "/experiences" },

  { title: "Contact", link: "/contact" },
];
export default function Header() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "rgba(247, 247, 247, 0.7)",
          height: "fit-content",
          borderRadius: 8,
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", gap: 6 }}>
            {headerContent.map((items) => (
              <Link
                to={items.link}
                style={{
                  color: "black",
                  fontFamily: "Notable",
                  textDecoration: "none",
                  fontSize: "1.5rem",
                }}
              >
                {items.title}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
