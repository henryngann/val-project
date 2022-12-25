import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import AgentBackground from "../components/AgentBackground";
import AgentSquare from "../components/AgentSquare";
import WordBackground from "../components/WordBackground";
import { Link } from "react-router-dom";
import useFetchAgentApi, { Root } from "../hooks/useFetchAgent";

type Agent = {
  agent?: string;
  agentPortrait?: string;
  agentBackground?: string;
};

const LandingPage = () => {
  const sectionStyles = {
    width: "100%",
    height: "100vh",
  };
  const [agents, setAgents] = useState<Root>();
  const [current, setCurrent] = useState<Agent>();

  const { fetchCall } = useFetchAgentApi();
  useEffect(() => {
    fetchCall().then((result) => setAgents(result as Root)); // eslint-disable-next-line
  }, []);

  const handleClick = (
    agent: string,
    agentPortrait: string,
    agentBackground: string
  ) => {
    setCurrent({
      agent: agent,
      agentPortrait: agentPortrait,
      agentBackground: agentBackground,
    });
  };

  return (
    <Grid
      container
      display="flex"
      component={"section"}
      sx={sectionStyles}
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} zIndex={-1}>
        <WordBackground
          agentName={current?.agent}
          agentBackground={current?.agentBackground}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} zIndex={-1}>
        <AgentBackground
          agentName={current?.agent}
          agentImage={current?.agentPortrait}
        />
      </Grid>
      <Grid
        container
        item
        xs={8}
        xl={8}
        lg={8}
        md={10}
        sm={10}
        justifyContent="space-around"
        spacing={1}
      >
        {agents?.data.map((it) => {
          return (
            <Grid item xl={1} key={it.uuid} sx={{ cursor: "pointer" }}>
              <Link to={`/agent/${it.uuid}`}>
                <AgentSquare
                  onClick={() =>
                    handleClick(
                      it.displayName,
                      it.fullPortrait!,
                      it.background!
                    )
                  }
                  agentImage={it.displayIconSmall}
                  agentName={it.displayName}
                />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default LandingPage;
