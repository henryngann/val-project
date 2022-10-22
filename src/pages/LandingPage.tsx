import { Grid, Box, Typography, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import AgentCard from "../components/AgentCard";
import Footer from "../components/Footer";
import { ValLogo } from "../components/ValLogo";
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
        <ValLogo />
      </Grid>
      {/*TODO // Use Grids to space the cards out evenly */}
      <Grid container justifyContent="space-around" item xs={6}>
        <AgentCard />
        {agents?.data.map((it) => {
          return (
            <Grid item xl={1}>
              <AgentCard agentImage={it.displayIcon} />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
