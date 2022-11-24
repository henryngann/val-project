import { Box } from "@mui/material";
import React from "react";

interface AgentBackgroundProps {
  agentImage?: string;
  agentName?: string;
  agentBackground?: string;
}

const agentStyles: React.CSSProperties = {
  width: "24.375rem",
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  left: 0,
  right: 0,
  textAlign: "center",
};

export default function AgentBackground({
  agentImage,
  agentName,
  agentBackground,
}: AgentBackgroundProps) {
  return (
    <Box>
      <img src={agentImage} alt={agentName} style={agentStyles} />
      <img src={agentBackground} alt={agentName} style={agentStyles} />
    </Box>
  );
}
