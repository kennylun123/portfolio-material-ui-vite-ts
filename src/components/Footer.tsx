import { Container, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="lg">
      <Divider />
      <Typography
        variant="body2"
        align="center"
        color={grey[600]}
        sx={{ p: "1rem" }}
      >{`© ${currentYear} Kenny Ng. This porfolio is built using React & MUI by Kenny Ng. Please get in touch if you want to use anything from my work.`}</Typography>
    </Container>
  );
}

export default Footer;
