import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import AgentCard from "../components/AgentCard";
import AgentSquare from "../components/AgentSquare";
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
      <Grid xs={5.5}>
        {agents?.data.map((it) => {
          return (
            <AgentSquare
              agentIcon={it.displayIconSmall}
            />
          );
        })}
      </Grid>
      < Grid item xs={12} >
        <Footer />
      </Grid>
    </Grid >
  );
};

export default LandingPage;
