import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import scrollToSection from "../utils";
import data from "../../data.json";

export default function Hero() {
  const { hero } = data;

  return (
    <Container
      id="home"
      maxWidth="md"
      sx={{
        position: "relative",
        minHeight: "100svh",
        px: { xs: "1.5rem", sm: "6rem" },
        py: "4.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        Hi, my name is
      </Typography>
      <Typography variant="h1" sx={{ fontSize: "clamp(5.5rem, 10vw, 8rem)" }}>
        {hero.name}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        {hero.position}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          maxWidth: "40ch",
          fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
          mt: "0.5rem",
        }}
      >
        {hero.intro}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "1rem",
          mt: "2.5rem",
        }}
      >
        <Button
          component={Link}
          href={hero.CV}
          target="_blank"
          variant="contained"
          size="large"
        >
          Get my CV
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => scrollToSection("projects")}
        >
          See my work
        </Button>
      </Box>
      <IconButton
        aria-label="next section"
        size="large"
        sx={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#656565",
          ":hover": { color: "#fff" },
        }}
        onClick={() => scrollToSection("stacks")}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    </Container>
  );
}
