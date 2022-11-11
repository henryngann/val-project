import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AgentCard from "../components/AgentCard";
import AgentCardDetails from "../components/AgentCardDetails";
import Footer from "../components/Footer";
import { ValLogo } from "../components/ValLogo";
import useFetchAgentApi, { Root } from "../hooks/useFetchAgent";
import StatsCard from "../components/StatsCard";

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

      <Grid
        component="article"
        container
        flexDirection="row"
        justifyContent="space-between"
        item
        xs={8}
        sm={10}
        md={12}
        lg={10}
        xl={12}
        sx={{ backgroundColor: "green" }}
        spacing={2}
      >
        <Grid container item xl={12}>
          <Grid item xl={6}>
            {/* Hard Code data for now */}
            <AgentCard
              agentImage={agents?.data[18].fullPortrait}
              agentName={agents?.data[0].displayName}
              abilityIcon1={agents?.data[18].abilities[0].displayIcon}
              abilityIcon2={agents?.data[18].abilities[3].displayIcon}
              abilityIcon3={agents?.data[18].abilities[1].displayIcon}
              alt="Agent Full Portrait"
            />
            <StatsCard />
          </Grid>
          <Grid item xl={4} xs={8}>
            {/* pass props in here */}
            <AgentCardDetails
              agent1Portrait={agents?.data[19].fullPortrait}
              agent1Name={agents?.data[19].displayName}
              agent2Portrait={agents?.data[17].fullPortrait}
              agent2Name={agents?.data[17].displayName}
            />
          </Grid>
        </Grid>

      </Grid>
      <Grid item xs={12} component="footer">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AgentPage;
