import { Box } from "@mui/material";

import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import LatestProjects from "./components/LatestProjects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
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
    </main>
  );
}
