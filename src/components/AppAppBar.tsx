import * as React from "react";
import { IconButton, Slide, useScrollTrigger } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChecklistIcon from "@mui/icons-material/Checklist";
import scrollToSection from "../utils";

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function AppAppBar() {
  return (
    <div>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 0,
            bgcolor: "transparent",
            backgroundImage: "none",
            mt: 2,
          }}
        >
          <Box sx={{ maxWidth: "fit-content", mx: "auto" }}>
            <Toolbar
              variant="regular"
              disableGutters={true}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                bgcolor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(24px)",
                maxHeight: 40,
                border: "1px solid",
                borderColor: "divider",
                boxShadow:
                  "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="home"
                  size="large"
                  onClick={() => scrollToSection("home")}
                >
                  <HomeIcon fontSize="large" />
                </IconButton>

                <IconButton
                  color="primary"
                  aria-label="tech stack"
                  size="large"
                  onClick={() => scrollToSection("stacks")}
                >
                  <ChecklistIcon fontSize="large" />
                </IconButton>

                <IconButton
                  color="primary"
                  aria-label="projects"
                  size="large"
                  onClick={() => scrollToSection("projects")}
                >
                  <AssignmentIcon fontSize="large" />
                </IconButton>

                <IconButton
                  color="primary"
                  aria-label="about me"
                  size="large"
                  onClick={() => scrollToSection("about")}
                >
                  <AccountCircleIcon fontSize="large" />
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default AppAppBar;
