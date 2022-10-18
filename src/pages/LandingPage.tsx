import { Grid, Box } from "@mui/material";
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
      direction={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={3} xl={1} sx={{ backgroundColor: "green" }}>
        {valLogo}
      </Grid>
      <Grid item xs={8}>

        {agents?.data.map((it) => {
          return <Box component="img" src={it.displayIcon} alt="Agents" style={{ width: 40, border: "1px solid grey" }}></Box>
        })}

      </Grid>
      <Grid item>Made w/ finger cramps. Henry Ngan.</Grid>
    </Grid>
  );
};

export default LandingPage;
