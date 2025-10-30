import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import aboutMeData from "../data/aboutme";

export default function TimeLine() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box sx={{ position: "relative", width: "100%", p: { xs: 2, md: 6} }}>

      {/* Vertical line in the middle */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "15px",
          borderRadius:"20px",
          backgroundColor: "#e0e0e0",
          zIndex: 0,
          [theme.breakpoints.down("sm")]: {
            left: "calc(50% - 5px)",
          },
        }}
      />

      {aboutMeData.map((item, index) => {
        const alignLeft = index % 2 === 0;
        const Icon= item.icon
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: isMobile
                ? "column"
                : alignLeft
                ? "row"
                : "row-reverse",
              alignItems: "center",
              mb: 10,
              position: "relative",
            }}
          >
            {/* Text box */}
            <Box
              sx={{
                width: { xs: "100%", sm: "45%" },
                textAlign: isMobile ? "center" : alignLeft ? "right" : "left",
                order: isMobile ? 2 : 0,
                pr: !isMobile && alignLeft ? 7 : 0, // space between text and line (right side)
                pl: !isMobile && !alignLeft ? 7 : 0, // space between text and line (left side)
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: item.color, fontWeight: "bold" ,fontFamily:"notable" , my:2}}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </Box>

            {/* Year + icon */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 2,
                mb: isMobile ? 3 : 0,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                {item.year}
              </Typography>

              {/* Circle */}
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "50%",
                  border: `4px solid ${item.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  elevation={5}
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                  }}
                >
                  <Icon/>
                </Paper>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
