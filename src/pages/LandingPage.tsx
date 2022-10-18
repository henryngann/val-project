import { Grid, Box, Typography, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import AgentSquare from "../components/AgentSquare";
import useFetchAgentApi, { Root } from "../hooks/useFetchAgent";

const LandingPage = () => {
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };
  const [agents, setAgents] = useState<Root>();
  const { fetchCall } = useFetchAgentApi();

  useEffect(() => {
    fetchCall().then((result) => setAgents(result as Root)); // eslint-disable-next-line
  }, []);
  //TODO Make this a reusable react component. ValLogoImage.tsx and whenever you do <ValLogoImage />

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

  return (
    <Grid
      container
      display="flex"
      component={"section"}
      sx={sectionStyles}
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {valLogo}
      </Grid>
      {/*TODO // Use Grids to space the cards out evenly */}
      <Grid container justifyContent="space-around" item xs={6}>
        <AgentSquare />
        {agents?.data.map((it) => {
          return (
            <Grid item xl={1}>
              {/* <AgentSquare displayIcon={it.displayIcon} /> */}
            </Grid>
          );
        })}
      </Grid>
      {/*Make a footer component  <footer message={'Made with power of friendship'}>{message}</footer> */}
    </Grid>
  );
};

export default LandingPage;
