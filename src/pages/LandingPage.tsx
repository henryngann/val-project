import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import AgentSquare from "../components/AgentSquare";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";
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
        <MusicPlayer />
      </Grid>
      <Grid
        container
        item
        xs={12}
        xl={4}
        justifyContent="space-between"
        spacing={1}
      >
        {agents?.data.map((it) => {
          return (
            <Grid item xl={1}>
              <AgentSquare
                agentImage={it.displayIconSmall}
                agentName={it.displayName}
              />
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
