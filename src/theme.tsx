import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#242424",
    },
    text: {
      primary: grey[100],
      secondary: grey[600],
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

export default theme;
