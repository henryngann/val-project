import * as React from "react";
import { motion } from "framer-motion";
import { MotionStyle } from "framer-motion/dist/framer-motion";

interface AgentPolaroid {
  agentImage: string;
  agentName: string;
  onClick: any;
}


export default function AgentSquare({
  agentImage,
  agentName,
  onClick,
}: AgentPolaroid) {
  return (
    <motion.img
      style={
        {
          border: "1px solid grey",
          borderRadius: "2px",
          zIndex: 999,
        } as MotionStyle
      }
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      src={agentImage}
      alt={agentName}
      width={80}
      height={80}
    />
  );
}
