import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import AgentCard from "../components/AgentCard";
import Footer from "../components/Footer";
import { ValLogo } from "../components/ValLogo";
import useFetchAgentApi, { Root } from "../hooks/useFetchAgent";

const AgentPage = () => {
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };

  const [agents, setAgents] = useState<Root>();
  const { fetchCall } = useFetchAgentApi();

  useEffect(() => {
    fetchCall().then((result) => setAgents(result as Root)); // eslint-disable-next-line
  }, []);

  //TODO Style the Agent Card like the Design
  //TODO 2 Abilitie Name just like the design in this card.
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
      <Grid item xs={12} component="figure">
        <ValLogo />
      </Grid>
      {/*TODO // Use Grids to space the cards out evenly */}
      <Grid
        component="article"
        container
        justifyContent="space-between"
        item
        xs={8}
        xl={12}
        spacing={4}
      >
        {agents?.data.map((it) => {
          return (
            <Grid item xl={3}>
              <AgentCard
                agentImage={it.fullPortraitV2}
                name={it.role?.displayName}
                agentName={it.displayName}
                ability1={it.abilities[1].displayName}
                ability2={it.abilities[2].displayName}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={12} component="footer">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AgentPage;
