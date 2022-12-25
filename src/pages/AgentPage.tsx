import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AgentCard from "../components/AgentCard";
import AgentCardDetails from "../components/AgentCardDetails";
import Footer from "../components/Footer";
import useFetchAgentApi, { Root } from "../hooks/useFetchAgent";



const AgentPage = () => {
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };

  const [agents, setAgents] = useState<Root>();
  const { fetchCall } = useFetchAgentApi();
  const { id } = useParams();

  useEffect(() => {
    fetchCall().then((result) => setAgents(result as Root)); // eslint-disable-next-line
  }, []);


  // const uuid = `https://valorant-api.com/v1/agents/${agents?.data[0].uuid}`
  // console.log(uuid)

  const url = `https://valorant-api.com/v1/agents/${id}`
  console.log(url)
  console.log(id)

  const agentUuid = () => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setAgents(result);
        console.log(result)
      });

  }


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
              agentImage={agents?.data[0].displayIcon}
              name={agents?.data[0].role?.displayName}
              agentName={agents?.data[0].displayName}
              ability1={agents?.data[0].abilities[1].displayName}
              ability2={agents?.data[0].abilities[2].displayName}
            />
          </Grid>
          <Grid item xl={4}>
            {/* pass props in here */}

            <AgentCardDetails />
          </Grid>
        </Grid>
        <Grid item xl={12}>
          <AgentCard
            agentImage={agents?.data[0].displayIcon}
            name={agents?.data[0].role?.displayName}
            agentName={agents?.data[0].displayName}
            ability1={agents?.data[0].abilities[1].displayName}
            ability2={agents?.data[0].abilities[2].displayName}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} component="footer">
        <Footer />
      </Grid>
    </Grid>

  );
};

export default AgentPage;
