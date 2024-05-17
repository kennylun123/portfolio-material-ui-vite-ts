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
} from "../TechIcons";

function TechStack() {
  return (
    <Container
      id="stacks"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "4rem",
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
