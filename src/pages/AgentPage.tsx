import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AgentCard from "../components/AgentCard";
import AgentCardDetails from "../components/AgentCardDetails";
import Footer from "../components/Footer";
import useFetchAgentApi, { Root } from "../hooks/useFetchAgent";
import StatsCard from "../components/StatsCard";
import RankCard from "../components/RankCard";
import WeaponCard from "../components/WeaponCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import GenericCard from "../components/GenericCard";
import { ValLogo } from "../components/ValLogo";

const AgentPage = () => {
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };

  const [agents, setAgents] = useState<Root>();
  const { fetchCall } = useFetchAgentApi();

  // use the tenary operator to render the footer conditonally

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
      <Grid item xs={12} sm={6} md={6} xl={12} component="figure">
        <ValLogo />
      </Grid>

      <Grid component="article" container item xs={12} xl={12}>
        <Grid container item xs={12} xl={3} spacing={2} flexDirection="row">
          <Grid item xs={12} sx={{ overflow: "hidden" }}>
            <AgentCard
              agentImage={agents?.data[18].fullPortrait}
              agentName={agents?.data[0].displayName}
              abilityIcon1={agents?.data[18].abilities[0].displayIcon}
              abilityIcon2={agents?.data[18].abilities[3].displayIcon}
              abilityIcon3={agents?.data[18].abilities[1].displayIcon}
              alt="Agent Full Portrait"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={12}  >
            <StatsCard />
          </Grid>
        </Grid>
        <Grid container xl={2} xs={8} spacing={2}>
          {/* <Grid item xl={12} xs={12}>
            <AgentCardDetails
              agentPortrait={agents?.data[19].fullPortrait}
              agentName={agents?.data[19].displayName}
            />
          </Grid>
          <Grid item xs={8} xl={12}>
            <AgentCardDetails
              agentPortrait={agents?.data[17].fullPortrait}
              agentName={agents?.data[17].displayName}
            />
          </Grid> */}
          {/* <Grid item xl={12} xs={12}>
            <GenericCard
              title="Rating"
              img="./assets/Diamond2.jpg"

            />
          </Grid>
          <Grid item xl={12} xs={12}>
            <GenericCard
              title="Top Weapon"
              img="./assets/Prime.png"
              subtitle="Vandal"
              body="Assault Rifles"
              widthProp="100%"
            />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12} component="footer">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AgentPage;
