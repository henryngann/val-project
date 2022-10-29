import React from "react";

interface AgentIcon {
  agentIcon?: string;
}
//add alt prop here
//https://mui.com/material-ui/react-card/#main-content #1 Read This
//Use an appropiate template for the card
//Hint: maxHeight Increase
//TODO : Polaroid
const AgentSquare = ({ agentIcon }: AgentIcon) => {
  return (
    <img src={agentIcon} style={{ width: 80, border: "1px solid grey" }} />
  );
};

export default AgentSquare;
