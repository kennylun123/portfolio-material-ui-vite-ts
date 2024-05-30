import { Container, Stack, Typography } from "@mui/material";
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
  MUIIcon,
  MongoDBIcon,
  NextJSICON,
  NodeJSIcon,
  ReactJSIcon,
  ShadcnUIIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "./TechIcons";

function TechStack() {
  return (
    <Container
      id="stacks"
      maxWidth="lg"
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "4rem",
        px: { xs: "1.5rem", md: "2.5rem" },
      }}
    >
      <Typography variant="h2">My Tech Stack</Typography>
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
        <ReactJSIcon />
        <NextJSICON />
        <TailwindCSSIcon />
        <MUIIcon />
        <ShadcnUIIcon />
        <MongoDBIcon />
        <ExpressJSIcon />
        <NodeJSIcon />
        <JQueryIcon />
        <BootstrapIcon />
        <FramerMotionIcon />
        <GitIcon />
        <GitHubIcon />
        <FigmaIcon />
      </Stack>
    </Container>
  );
}

export default TechStack;
