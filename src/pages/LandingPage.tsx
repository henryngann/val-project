import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetchAgentApi from "../hooks/useFetchAgent";

const LandingPage = () => {
  const { fetchCall, result, error, isLoading } = useFetchAgentApi();
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };
  const [items, setItems] = useState();

  useEffect(() => {
    fetchCall().then((result) => setItems(result)); // eslint-disable-next-line
  }, []);
  {
    console.log(items);
  }

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
        <Typography> Val Logo</Typography>
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
