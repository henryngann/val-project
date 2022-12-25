import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

interface AgentBackgroundProps {
  agentImage?: string;
  agentName?: string;
  key?: number;
}

export default function AgentBackground({
  agentImage,
  agentName,
  key,
}: AgentBackgroundProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const agentStyles: React.CSSProperties = {
    width: matches ? "30rem" : "12rem",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    top: 150,
    textAlign: "center",
    filter: "drop-shadow(0 0 0.50rem #090009)",
  };

  return (
    <>
      <motion.img
        key={agentName}
        src={agentImage}
        alt={agentName}
        style={agentStyles}
        initial={{ opacity: 0, x: 50 }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        animate={{ opacity: 1, x: 0 }}
      />
    </>
  );
}
