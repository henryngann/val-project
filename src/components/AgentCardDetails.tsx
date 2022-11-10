import { Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CSS from 'csstype';

interface AgentProp {
  agentPortrait?: string
}

const paperStyle: CSS.Properties = {
  position: "relative",
  width: "180",
  borderRadius: "10%",
  backgroundColor: "#191B2A"

};


export default function AgentCardDetails({ agentPortrait }: AgentProp) {
  return (
    <Grid
      container
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={6} md={4}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: "column",
            '& > :not(style)': {
              m: 1,
              width: 150,
              height: 150,
            },
          }}
        >
          <Paper elevation={0} style={paperStyle}>
            <img
              src={agentPortrait}
              style={{
                scale: "2 1",
                top: -30,
                width: "70%",
                height: "120%",
                position: "absolute",
                marginLeft: "35px"
              }}
            />
            <Typography variant="body2">
              JETT
            </Typography>
          </Paper>
          <Paper style={paperStyle} />
          <Paper elevation={3} style={paperStyle} />
        </Box>
      </Grid>
    </Grid>
  );
}
