import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useFetchAgentApi, { Root } from "../hooks/useFetchAgent";

interface AgentProps {
  name?: string
  agentImage?: string
}

export default function AgentCard({ name, agentImage }: AgentProps) {
  const theme = useTheme();


  //TODO Rename AgentSquare to AgentCard
  //TODO Rename MediaControlCard to AgentCard
  //TODO Put Agent Picture in CardMedia
  //TODO Make Interface for AgentCard Props, interface AgentProps { displayIcon, name,}
  //TODO Pass the props in like I did with AgentSquare before.
  //TODO Map them all and put them on the screen
  //TODO Use Grids to Space and do responsiveness

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5">Agent</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>

        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 95 }}
        image={agentImage}
      />
    </Card>
  );
}
