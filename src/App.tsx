import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { PaletteMode, createTheme } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import PortfolioPage from "./PorfolioPage";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    // <Container maxWidth="sm">
    //   <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
    //   <Box sx={{ my: 4 }}>
    //     <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
    //       Material UI Vite.js example in TypeScript
    //     </Typography>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>

    <PortfolioPage />
  );
}
