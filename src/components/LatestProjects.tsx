import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import data from "../../data.json";
import React from "react";
import ReadMore from "./ReadMore";

function LatestProjects() {
  const { projects } = data;
  return (
    <Container
      id="projects"
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "4rem",
        px: { xs: "1.5rem", md: "2.5rem" },
      }}
    >
      <Typography variant="h2">Latest Projects</Typography>
      <Box>
        {projects.map((item, index) => (
          <React.Fragment key={item.title}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              sx={{ py: "3.5rem", gap: "2rem" }}
            >
              <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "clamp(1.5rem, 4vw, 1.75rem)",
                  }}
                >
                  {item.title}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mt: ".5rem" }}>
                  {item.stacks.map((stack, i) => (
                    <Chip
                      key={`project-${index}-stack-${i}`}
                      label={stack}
                      size="small"
                      sx={{ bgcolor: "primary.dark", fontWeight: "400" }}
                    />
                  ))}
                </Stack>

                <ReadMore
                  id={`project-${index + 1}-content`}
                  text={item.content}
                  amountOfWords={55}
                  variant="body1"
                  sx={{ mt: ".5rem" }}
                />
              </Box>

              <Box
                sx={(theme) => ({
                  flex: 1,
                  maxWidth: "500px",
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
                    width: "100%",
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
                    target="_blank"
                    variant="contained"
                    startIcon={<OpenInNewIcon />}
                    aria-label={`${item.title} live site`}
                  >
                    Demo
                  </Button>
                  <Button
                    component={Link}
                    href={item.url.github}
                    target="_blank"
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    aria-label={`${item.title} source code`}
                  >
                    Code
                  </Button>
                </Box>
              </Box>
            </Stack>
            {index !== projects.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>
      <Button
        component={Link}
        href={`${data.about.contact.github}?tab=repositories`}
        target="_blank"
        variant="outlined"
      >
        More in my Github
      </Button>
    </Container>
  );
}

export default LatestProjects;
