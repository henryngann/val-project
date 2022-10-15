import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetchAgentApi from "../hooks/useFetchAgent";

const LandingPage = () => {
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };

  const { result } = useFetchAgentApi();
  const valLogo = (
    <img
      src="./assets/valorantlogo.png"
      style={{
        objectFit: "contain",
        width: "100%",
        height: "auto",
        maxHeight: "20vh",
      }}
    />
  );

  console.log(result);

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
      <Grid item xs={3} xl={1} sx={{ backgroundColor: "green" }}>
        {valLogo}
      </Grid>
      <Grid item xs={8}>
        {/* Make an Agent Component that returns a box
        
        result.map((it)=>{

          <AgentSquare image={it.image}  name={it.displayname}   />

        })

        */}
      </Grid>
      <Grid item>Made w/ finger cramps. Henry Ngan.</Grid>
    </Grid>
  );
};

export default LandingPage;
