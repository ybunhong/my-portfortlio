import { Box, Link } from "@mui/material";

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
                variant="h5"
                href={items.link}
                sx={{ color: "black", fontFamily: "Notable" }}
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
