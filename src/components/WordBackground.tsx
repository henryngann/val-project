import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

interface AgentBackgroundProps {
  agentName?: string;
  agentBackground?: string;
}

const WordBackground = ({
  agentName,
  agentBackground,
}: AgentBackgroundProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const agentBackgroundStyles: React.CSSProperties = {
    width: matches ? "32rem" : "15rem",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    zIndex: -2,
    filter: "opacity(1.25%)",
  };

  return (
    <motion.img
      initial={{ opacity: 0, x: -200 }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
      animate={{ opacity: 1, x: 0 }}
      key={agentName}
      src={agentBackground}
      alt={agentName}
      style={agentBackgroundStyles}
    />
  );
};

export default WordBackground;
