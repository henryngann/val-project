import React from "react";

//Pass Props in to make the square dynamic

interface AgentProps {
  image?: string;
  name?: string;
}

const AgentSquare = ({ image, name }: AgentProps) => {
  return <div>AgentSquare</div>;
};

export default AgentSquare;
