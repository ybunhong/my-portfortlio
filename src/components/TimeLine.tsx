import { Box, Paper, Typography, Stack, Chip } from "@mui/material";
import aboutMeData from "../data/aboutme";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const categoryIcons = {
  work: WorkIcon,
  education: SchoolIcon,
  volunteer: VolunteerIcon,
  "Volunteer and Competition": VolunteerIcon,
  competition: EmojiEventsIcon,
};

const categoryColors = {
  work: "#7ac943",
  education: "#29abe2",
  volunteer: "#f15a24",
  "Volunteer and Competition": "#f15a24",
  competition: "#d11178ff",
};

export default function TimeLine() {
  // Group data by category
  const groupedData = aboutMeData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof aboutMeData>);

  const categoryOrder = ['work', 'Volunteer and Competition', 'education'];

  return (
    <Box sx={{ p: { xs: 2, md: 6} }}>
      <Stack spacing={4}>
        {categoryOrder.map((category) => {
          const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
          const items = groupedData[category] || [];
          
          if (items.length === 0) return null;

          return (
            <Box key={category}>
              {/* Category Header */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: categoryColors[category as keyof typeof categoryColors],
                    borderRadius: 2,
                    color: "white",
                  }}
                >
                  <CategoryIcon />
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: "#24292e", 
                    fontFamily: "notable",
                    textTransform: "capitalize"
                  }}
                >
                  {category}
                </Typography>
              </Box>

              {/* Category Items */}
              <Stack spacing={3}>
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Paper
                      key={`${category}-${index}`}
                      elevation={2}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        bgcolor: "#ffffff",
                        border: "1px solid #e1e4e8",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          borderColor: "primary.main",
                          boxShadow: "0 8px 24px rgba(32, 177, 90, 0.15)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                        {/* Icon */}
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "#f6f8fa",
                            borderRadius: 2,
                            border: "1px solid #e1e4e8",
                            flexShrink: 0,
                          }}
                        >
                          <Box sx={{ color: item.color, fontSize: 24 }}>
                            <Icon />
                          </Box>
                        </Box>
                        
                        {/* Content */}
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: "#24292e", 
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                fontFamily: "notable"
                              }}
                            >
                              {item.title}
                            </Typography>
                            
                            <Chip 
                              label={item.year}
                              size="small"
                              sx={{ 
                                bgcolor: "#f6f8fa",
                                color: "#586069",
                                border: "1px solid #e1e4e8",
                                fontSize: "0.75rem"
                              }}
                            />
                          </Box>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: "#586069", 
                              fontSize: "0.9rem",
                              lineHeight: 1.5,
                              whiteSpace: "pre-line"
                            }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  );
                })}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
