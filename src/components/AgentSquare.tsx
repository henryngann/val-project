import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

interface AgentPolaroid {
  agentImage: string;
  agentName: string;
}

export default function AgentSquare({ agentImage, agentName }: AgentPolaroid) {
  return (
    <>
      <Box component="figure">
        <img
          src={agentImage}
          alt={agentName}
          width={80}
          height={80}
          style={{ border: "1px solid grey", borderRadius: "2px" }}
        />
      </Box>

      <Typography variant="subtitle2">{agentName}</Typography>
    </>
  );
}
