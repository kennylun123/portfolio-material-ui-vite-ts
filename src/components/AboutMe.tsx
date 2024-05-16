import { Avatar, Box, Container, Typography } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import AvatarLinkRounded from "./AvatarLinkRounded";
import data from "../../data.json";

function AboutMe() {
  const { about } = data;
  return (
    <Container
      id="about"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "4rem",
      }}
    >
      <Typography variant="h2">About Me</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "2rem",
        }}
      >
        <Avatar
          alt="kenny photo"
          src="/assets/me.jpg"
          sx={{
            width: "clamp(180px, 20vw ,250px)",
            height: "auto",
            border: "4px solid",
            borderColor: grey[200],
          }}
        />
        <Typography variant="h3" align="center" sx={{ mt: "2rem" }}>
          {about.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: "1rem" }}>
          {about.content}
        </Typography>

        <Typography variant="h3" sx={{ mt: "2rem" }}>
          Let's connect!
        </Typography>

        <Box sx={{ mt: "1rem", display: "flex", gap: ".5rem" }}>
          <AvatarLinkRounded
            href={about.contact.linkedin}
            sx={{ bgcolor: blue[800] }}
            aria-label="visit my linkedin"
          >
            <LinkedInIcon fontSize="large" htmlColor="#fff" />
          </AvatarLinkRounded>
          <AvatarLinkRounded
            href={about.contact.github}
            sx={{ bgcolor: grey[800] }}
            aria-label="visit my github"
          >
            <GitHubIcon fontSize="large" htmlColor="#fff" />
          </AvatarLinkRounded>
          <AvatarLinkRounded
            href={about.contact.email}
            sx={{ bgcolor: red[500] }}
            aria-label="draft an email to me"
          >
            <EmailIcon fontSize="large" htmlColor="#fff" />
          </AvatarLinkRounded>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutMe;
