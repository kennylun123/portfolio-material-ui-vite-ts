import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import scrollToSection from "../utils";

export default function Hero() {
  return (
    <Container
      id="home"
      maxWidth="md"
      sx={{
        position: "relative",
        height: "100vh",
        px: { xs: "1.5rem", sm: "6rem" },
        pt: "7rem",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        Hi, my name is
      </Typography>
      <Typography variant="h1" sx={{ fontSize: "clamp(5.5rem, 10vw, 8rem)" }}>
        Kenny
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        A Frontend Developer
      </Typography>
      <Typography
        variant="body2"
        sx={{
          maxWidth: "40ch",
          fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
          mt: "0.5rem",
        }}
      >
        Passionate on creating websites that are responsive, pixel perfect, and
        accessible
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "1rem",
          mt: "2.5rem",
        }}
      >
        <Button variant="contained" size="large">
          Resume
        </Button>
        <Button variant="outlined" size="large">
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
          ":hover": { bgcolor: "#454545", color: "#fff" },
        }}
        onClick={() => scrollToSection("about")}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    </Container>
  );
}
