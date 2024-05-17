import { Container, Divider, Typography } from "@mui/material";

function Footer() {
  return (
    <Container maxWidth="lg">
      <Divider />
      <Typography
        variant="body2"
        align="center"
        color="text.secondary"
        sx={{ p: "1rem" }}
      >{`© ${new Date().getFullYear()} Kenny Ng. This porfolio is built using Vite, React, and MUI by Kenny Ng. Please get in touch if you want to use anything from my work.`}</Typography>
    </Container>
  );
}

export default Footer;
