import * as React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
interface AgentPolaroid {
  agentImage: string;
  agentName: string;
}

export default function AgentSquare({ agentImage, agentName }: AgentPolaroid) {
  return (
    <Box sx={{ border: "1px solid grey", borderRadius: "2px" }}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src={agentImage}
        alt={agentName}
        width={80}
        height={80}
      />
    </Box>
  );
}
