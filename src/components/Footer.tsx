import { Typography } from "@mui/material";

const myStyles = {
  textDecoration: "overline",
  color: "rgb(217, 217, 217)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Footer = () => {
  return (
    <footer style={myStyles}>
      <Typography variant="subtitle2">
        Made with the power of friendship
      </Typography>
    </footer>
  );
};

export default Footer;
