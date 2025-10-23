import { Box, Typography, Paper, Stack } from "@mui/material";
import techSkills from "../data/tech-data";

export default function Techbox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          textAlign: "center",
          padding: 8,
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: "Notable" }}>
          My Tech Skill
        </Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
          fugit necessitatibus maiores ratione quidem commodi, nostrum alias aut
          voluptatem voluptatibus maxime dolores rerum doloremque sed? Culpa
          consectetur accusantium cum.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {techSkills.map((items) => (
              <Paper
                elevation={3}
                key={items.id}
                sx={{
                  padding: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  borderRadius: 6,
                }}
              >
                <img src={items.imageUrl} width="90" height="90" />
                <Typography variant="h6">{items.tech}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
