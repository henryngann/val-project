import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
interface AgentBackgroundProps {
  agentImage?: string;
  agentName?: string;
  agentBackground?: string;
}

export default function AgentBackground({
  agentImage,
  agentName,
  agentBackground,
}: AgentBackgroundProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const agentStyles: React.CSSProperties = {
    width: "24.375rem",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    transform: "scale(2)",
  };

  const agentBackgroundStyles: React.CSSProperties = {
    width: matches ? "50rem" : "12rem",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    zIndex: -2,
    filter: "opacity(1.25%)",
    transform: "scale(2)",
  };

  return (
    <>
      <img src={agentImage} alt={agentName} style={agentStyles} />
      <img
        src={agentBackground}
        alt={agentName}
        style={agentBackgroundStyles}
      />
    </>
  );
}
