import { Box } from "@mui/system";
import React from "react";

//Pass Props in to make the square dynamic

interface AgentProps {
  displayIcon?: string;
  name?: string;
}

const AgentSquare = ({ displayIcon, name }: AgentProps) => {
  return <Box component="img"></Box>
};

export default AgentSquare;
