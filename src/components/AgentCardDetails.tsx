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
  width: "100%",
  borderRadius: "10%",
  backgroundColor: "#191B2A",
};

const paperCenter: CSS.Properties = {
  display: "flex",
  alignItems: "center",
};

export default function AgentCardDetails({
  agentPortrait,
  agentName,
}: AgentProp) {
  return (
    <Grid item xs={6} md={4} xl={3}>
      <Paper elevation={9} style={paperStyle}>
        <img
          src={agentPortrait}
          style={{
            scale: "2 1",
            top: -20,
            height: "100%",
            position: "absolute",
            left: 45,
          }}
        />
        <Box>
          <Typography variant="h4" sx={paperCenter}>
            {agentName?.toLocaleUpperCase()}
          </Typography>
          <Typography variant="body2" sx={paperCenter}>
            {" "}
            Win Ratio
          </Typography>
          <Typography variant="body2" sx={paperCenter}>
            60.23%
          </Typography>
        </Box>
      </Paper>
      {/*  */}
      {/* <Paper elevation={3} style={paperStyle}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "22px",
          }}
        >
          Rating
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 80,
          }}
        >
          <img
            src="diamond2.jpg"
            style={{
              width: 60,
              backgroundColor: "#191B2A",
              backgroundImage: "none",
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Diamond 3
        </Typography>
      </Paper> */}
    </Grid>
  );
}
