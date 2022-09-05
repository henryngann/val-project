import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const LandingPage = () => {
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };

  return (
    <Grid
      container
      display="flex"
      component={"section"}
      sx={sectionStyles}
      direction={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Typography>Val Logo</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Tabs</Typography>
      </Grid>
      <Grid item xs={5}>
        Content
      </Grid>
      <Grid item>Footer</Grid>
    </Grid>
  );
};

export default LandingPage;
