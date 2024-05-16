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
  MongoDBIcon,
  NextJSICON,
  NodeJSIcon,
  ReactJSIcon,
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
  );
}

export default TechStack;
