import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
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

const agentBackgroundStyles: React.CSSProperties = {
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
  const matches = useMediaQuery("(min-width:600px)");

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
