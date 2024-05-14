import * as React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  PaletteMode,
  Stack,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MuiGitHubIcon from "@mui/icons-material/GitHub";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import {
  BootstrapIcon,
  CSSIcon,
  ExpressJSIcon,
  FigmaIcon,
  FramerMotionIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JQueryIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NextJSICON,
  NodeJSIcon,
  ReactJSIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "./tech-icons";

import data from "../data.json";

export default function PortfolioPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const { projects } = data;
  // const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  // const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({
    palette: {
      mode,
      background: {
        default: "#242424",
        // #273043
      },
      text: {
        primary: "#fff",
      },
      primary: {
        // main: "#F44336",
        main: "#E65100",
      },
      secondary: {
        main: "#0066FF",
      },
    },
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // const toggleCustomTheme = () => {
  //   setShowCustomTheme((prev) => !prev);
  // };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box
        id="stacks"
        sx={{
          bgcolor: "#263238",
          py: "4rem",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: "clamp(3rem, 5vw, 4rem)",
            }}
          >
            My Tech Stack
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mt: "2rem" }}
          >
            <TypeScriptIcon />
            <JavaScriptIcon />
            <HTMLIcon />
            <CSSIcon />
            <NodeJSIcon />
            <ExpressJSIcon />
            <ReactJSIcon />
            <NextJSICON />
            <JQueryIcon />
            <BootstrapIcon />
            <TailwindCSSIcon />
            <MongoDBIcon />
            <FramerMotionIcon />
            <FigmaIcon />
            <GitIcon />
            <GitHubIcon />
          </Stack>
        </Container>

        <Container
          id="projects"
          sx={{
            mt: "8rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "clamp(3rem, 5vw, 4rem)",
            }}
          >
            Latest Projects
          </Typography>

          {projects.map((item) => (
            <Stack
              key={item.title}
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              sx={{ my: "3.5rem", gap: "2rem" }}
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
                <Typography
                  variant="body1"
                  sx={{ mt: "1rem", fontWeight: "200", letterSpacing: "1px" }}
                >
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
                    startIcon={<MuiGitHubIcon />}
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
            href="https://github.com/kennylun123"
          >
            More in my Github
          </Button>
        </Container>
        {/* <Box sx={{ bgcolor: "red", height: "200px", width: "200px" }}></Box> */}
        {/* <div
              style={{
                backgroundColor: "blue",
                height: "200px",
                width: "200px",
                display: "inline-block",
              }}
            />
            <span
              style={{
                backgroundColor: "yellow",
                height: "200px",
                width: "200px",
                display: "inline-block",
              }}
            /> */}
        {/* <LogoCollection />
            <Features />
            <Divider />
            <Testimonials />
            <Divider />
            <Highlights />
            <Divider />
            <Pricing />
            <Divider />
            <FAQ />
            <Divider />
            <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}
