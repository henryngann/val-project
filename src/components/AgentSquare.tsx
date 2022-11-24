import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { motion } from "framer-motion/dist/framer-motion";
interface AgentPolaroid {
  agentImage: string;
  agentName: string;
}

export default function AgentSquare({ agentImage, agentName }: AgentPolaroid) {
  return (
    <>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src={agentImage}
        alt={agentName}
        width={80}
        height={80}
        style={{ border: "1px solid grey", borderRadius: "2px" }}
      />
    </>
  );
}
