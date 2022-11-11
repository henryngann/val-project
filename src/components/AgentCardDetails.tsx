import { Grid, Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CSS from 'csstype';


interface AgentProp {
  agent1Portrait?: string
  agent1Name?: string
  agent2Portrait?: string
  agent2Name?: string
}

const paperStyle: CSS.Properties = {
  position: "relative",
  width: "180",
  borderRadius: "10%",
  backgroundColor: "#191B2A"
};

const paperCenter: CSS.Properties = {
  display: "flex",
  alignItems: "center",
}


export default function AgentCardDetails({ agent1Portrait, agent1Name, agent2Name, agent2Portrait }: AgentProp) {
  return (
    <Grid
      container
      display="flex"

      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={6} md={4} xl={1}>
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
              src={agent1Portrait}
              style={{
                scale: "2 1",
                top: -30,
                width: "70%",
                height: "110%",
                position: "absolute",
                left: 45
              }}
            />
            <Box>
              <Typography variant="h4" sx={paperCenter}>{agent1Name?.toLocaleUpperCase()}</Typography>
              <Typography variant="body2" sx={paperCenter}> Win Ratio</Typography>
              <Typography variant="body2" sx={paperCenter}>60.23%</Typography>
            </Box>
          </Paper>
          <Paper style={paperStyle}>
            <img
              src={agent2Portrait}
              style={{
                scale: "2 1",
                top: -20,
                width: "70%",
                height: "110%",
                position: "absolute",
                left: 70
              }}
            />
            <Box>
              <Typography variant="h4" sx={paperCenter}>{agent2Name?.toLocaleUpperCase()}</Typography>
              <Typography variant="body2" sx={paperCenter}> Win Ratio</Typography>
              <Typography variant="body2" sx={paperCenter}>54.32%</Typography>
            </Box>
          </Paper>
          <Paper elevation={3} style={paperStyle}>
            <Typography variant="h4" sx={{ display: "flex", justifyContent: "center", fontSize: "22px" }}>Rating</Typography>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 80
            }}>
              <img
                src="diamond2.jpg"
                style={{
                  width: 60,
                  backgroundColor: "#191B2A",
                  backgroundImage: "none"
                }}
              />
            </Box>
            <Typography variant="h5" sx={{ display: "flex", justifyContent: "center" }}>Diamond 3</Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
