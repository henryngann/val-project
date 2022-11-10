import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import CSS from 'csstype';
interface AgentProps {
  name?: string;
  agentName?: string;
  agentImage?: string;
  abilityIcon1?: string;
  abilityIcon2?: string;
  abilityIcon3?: string;
  alt?: string;
}

const abilitySize: CSS.Properties = {
  width: "25%",

};
const abilityStyles: CSS.Properties = {
  display: "flex",
  marginTop: "10px"
};

const abilitySpacing: CSS.Properties = {
  marginLeft: "7px"
}

export default function AgentCard({
  agentImage,
  abilityIcon1,
  abilityIcon2,
  abilityIcon3,
  agentName,
  alt,
}: AgentProps) {
  //Add bullet points
  //play a round with scale optioanl




  return (
    <Grid
      container
      display="flex"
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={8} xl={1}>
        <Card
          sx={{
            display: "flex",
            width: "450px",
            height: "250px",
            zIndex: -1,
            overflow: "visible",
          }}
        >
          <CardContent sx={{ width: "50%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5">Top Agent</Typography>
              <Box
                display="flex"
                alignItems="center"
                padding="10px 0px"
              >
                <Typography variant="h4" style={{ color: "#FF4654" }}>{agentName}</Typography>
                <Typography variant="h6" sx={{ marginLeft: 1 }}> Played 354H 46M</Typography>
              </Box>
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="baseline"
                justifyContent="space-between"
                borderTop="1px solid grey"
                spacing={2}
                sx={{ width: "100%" }}>
                <Box
                  display="flex"
                  flexDirection="column">
                  <Typography variant="body2">Win Ratio</Typography>
                  <Typography variant="body2">62.11%</Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column">
                  <Typography variant="body2"> K/D Ratio</Typography>
                  <Typography variant="body2">1.14</Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column">
                  <Typography variant="body2">Win Ratio</Typography>
                  <Typography variant="body2">138.2</Typography>
                </Box>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                marginTop="15px"
              >
                <Typography variant="body2">
                  Ability Kills/Match
                </Typography>
              </Stack>
              <Box style={{ width: "100%", display: "flex" }}>
                <Box style={abilityStyles}>
                  <img
                    src={abilityIcon1}
                    style={abilitySize}
                  />
                  <Typography variant="body2" style={abilitySpacing}> 0.33 </Typography>
                </Box>
                <Box style={abilityStyles}>
                  <img
                    src={abilityIcon2}
                    style={abilitySize}
                  />
                  <Typography variant="body2" style={abilitySpacing}> 0.78 </Typography>
                </Box>
                <Box style={abilityStyles}>
                  <img
                    src={abilityIcon3}
                    style={abilitySize}
                  />
                  <Typography variant="body2" style={abilitySpacing}> 4.82 </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
          <Box sx={{ position: "relative", width: 140, zIndex: 999 }}>
            <img
              src={agentImage}
              alt={alt}
              style={{
                scale: "2 1",
                top: -50,
                width: "100%",
                height: "120%",
                position: "absolute",
              }}
            />
          </Box>
        </Card>
      </Grid>
    </Grid >
  );
}
