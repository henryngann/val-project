import { Grid, Typography } from "@mui/material";
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

  const { fetchCall } = useFetchAgentApi();
  const { id } = useParams();

  console.log(id);
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
        <Typography variant="body2">{id}</Typography>
      </Grid>
      <Grid item xs={12} component="footer">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AgentPage;
