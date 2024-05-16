import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import data from "../../data.json";

function LatestProjects() {
  const { projects } = data;
  return (
    <Container
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "4rem",
      }}
    >
      <Typography variant="h2">Latest Projects</Typography>

      {projects.map((item) => (
        <Stack
          key={item.title}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          sx={{ py: "3.5rem", gap: "2rem" }}
        >
          <Box sx={{ order: { xs: 1, md: 0 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "clamp(1.5rem, 4vw, 1.75rem)",
              }}
            >
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: "1rem" }}>
              {item.content}
            </Typography>
          </Box>

          <Box
            sx={(theme) => ({
              flexShrink: 0,
              display: "flex",
              position: "relative",
              borderRadius: "6px",
              boxShadow: theme.shadows[10],
              overflow: "hidden",
            })}
          >
            <img
              src={item.image.png}
              alt={item.image.alt}
              style={{
                maxWidth: "100%",
                width: "500px",
                height: "300px",
                objectFit: "cover",
                objectPosition: "top left",
              }}
              loading="lazy"
            />

            <Box
              sx={(theme) => ({
                position: "absolute",
                display: "grid",
                placeContent: "center",
                gridAutoFlow: "column",
                columnGap: "1rem",
                inset: 0,
                bgcolor: theme.palette.action.active,
                opacity: 0,
                transition: "opacity 200ms ease",
                "&:focus-within": {
                  opacity: 1,
                },
                "&:hover": {
                  opacity: 1,
                },
              })}
            >
              <Button
                component={Link}
                href={item.url.live}
                variant="contained"
                startIcon={<OpenInNewIcon />}
                aria-label={`${item.title} live site`}
              >
                Demo
              </Button>
              <Button
                component={Link}
                href={item.url.github}
                variant="contained"
                startIcon={<GitHubIcon />}
                aria-label={`${item.title} source code`}
              >
                Code
              </Button>
            </Box>
          </Box>
        </Stack>
      ))}
      <Button
        component={Link}
        variant="outlined"
        href={`${data.about.contact.github}?tab=repositories`}
      >
        More in my Github
      </Button>
    </Container>
  );
}

export default LatestProjects;
