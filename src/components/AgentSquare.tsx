import React from 'react'

interface AgentIcon {
    agentIcon?: string
}

const AgentSquare = ({ agentIcon }: AgentIcon) => {
    return (
        <img src={agentIcon} style={{ width: 40, border: "1px solid grey" }}></img>
    )
}

export default AgentSquare
