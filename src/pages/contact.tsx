import { Paper, Box, Typography, Avatar } from "@mui/material";
import { 
  GitHub,
  LinkedIn,
  Facebook,
  Instagram,
  Telegram,
  Email
} from "@mui/icons-material";
import contactData from "../data/contact";

function getIcon(title: string) {
  switch (title.toLowerCase()) {
    case 'github': return <GitHub />;
    case 'linkedin': return <LinkedIn />;
    case 'facebook': return <Facebook />;
    case 'instagram': return <Instagram />;
    case 'telegram': return <Telegram />;
    default: return <Email />;
  }
}

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <Typography variant="h3" fontFamily={"Notable"} sx={{ color: "#24292e",
          textAlign: "center", }}>
          Get In Touch
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#586069", maxWidth: 600, mx: "auto" ,
          textAlign: "center",}}>
          I'm always open to connecting, collaborating, or answering any questions you have.
          Feel free to reach out through any of the platforms below.
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "#ffffff",
            border: "1px solid #e1e4e8",
            mx: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {contactData.map((contact) => (
              <Box 
                key={contact.id} 
                component="a"
                href={contact.link}
                target="_blank"
                sx={{ 
                  display: "flex", 
                  gap: 1,
                  textDecoration: "none",
                  color: "primary.main",
                  "&:hover": {
                    "& .MuiAvatar-root": {
                      bgcolor: "primary.main",
                    }
                  }
                }}
              >
                <Avatar 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    bgcolor: "#f6f8fa",
                    border: "1px solid #e1e4e8",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  <Box sx={{ color: "primary.main", fontSize: 20 }}>
                    {getIcon(contact.title)}
                  </Box>
                </Avatar>
                
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "text.primary", 
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    {contact.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "text.secondary", 
                      fontSize: "0.85rem",
                    }}
                  >
                    {contact.username}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </>
  );
}
