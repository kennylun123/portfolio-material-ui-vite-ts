import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import LatestProjects from "./components/LatestProjects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function PortfolioPage() {
  const defaultTheme = createTheme({
    palette: {
      background: {
        default: "#242424",
      },
      text: {
        primary: "#fff",
      },
      primary: {
        main: "#009688",
      },
      secondary: {
        main: "#0066FF",
      },
      divider: "rgba(255,255,255, .12)",
    },
    typography: {
      h2: {
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
      },
      h3: {
        fontSize: "clamp(1.5rem, 4vw, 1.75rem)",
      },
      body1: {
        fontWeight: "200",
        letterSpacing: "1px",
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box
        sx={{
          bgcolor: "#263238",
        }}
      >
        <TechStack />
        <LatestProjects />
      </Box>
      <AboutMe />
      <Footer />
    </ThemeProvider>
  );
}
