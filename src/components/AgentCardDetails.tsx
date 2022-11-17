import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CSS from "csstype";

interface AgentProp {
  agentPortrait?: string;
  agentName?: string;
}

const paperStyle: CSS.Properties = {
  position: "relative",
  borderRadius: "10%",
  backgroundColor: "#191B2A",
};

export default function AgentCardDetails({
  agentPortrait,
  agentName,
}: AgentProp) {
  //add a subtitle prop here for winRatio
  return (
    <Paper elevation={9} style={paperStyle}>
      <img
        src={agentPortrait}
        style={{
          width: "50%",
          scale: "2 1",
          top: -20,
          height: "100%",
          position: "absolute",
          left: 95,
        }}
      />
      <Stack direction={"column"} spacing={4} sx={{ display: "flex" }}>
        <Typography variant="h4">{agentName?.toLocaleUpperCase()}</Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", flexDirection: "column", height: "100px" }}
        >
          Win Ratio 60.23
        </Typography>
      </Stack>
    </Paper>
  );
}
