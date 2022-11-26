import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import CSS from "csstype";
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
  marginTop: "10px",
};

const abilitySpacing: CSS.Properties = {
  marginLeft: "7px",
  fontWeight: "bold",
};

const bold: CSS.Properties = {
  fontWeight: "bold",
};

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
    <Card
      sx={{
        display: "flex",
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
            sx={{
              padding: "10px 0px",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="h4" sx={{ color: "#FF4654" }}>
                {agentName?.toUpperCase()}
              </Typography>
              <Typography variant="h6"> Played 354H 46M</Typography>
            </Stack>
          </Box>
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="baseline"
            justifyContent="space-between"
            spacing={2}
            sx={{ width: "100%", borderTop: "1px solid grey" }}
          >
            <Box flexDirection="column">
              <Typography variant="body2">Win Ratio</Typography>
              <Typography variant="body2" sx={bold}>
                62.11%
              </Typography>
            </Box>
            <Box flexDirection="column">
              <Typography variant="body2">K/D Ratio</Typography>
              <Typography variant="body2" sx={bold}>
                1.14
              </Typography>
            </Box>
            <Box flexDirection="column">
              <Typography variant="body2">Win Ratio</Typography>
              <Typography variant="body2" style={bold}>
                138.2
              </Typography>
            </Box>
          </Stack>
          <Stack
            sx={{ height: "30px", display: "flex", justifyContent: "end" }}
          >
            <Typography variant="body2">Ability Kills/Match</Typography>
          </Stack>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={abilityStyles}>
              <img src={abilityIcon1} style={abilitySize} />
              <Typography variant="body2" sx={abilitySpacing}>
                {" "}
                0.33{" "}
              </Typography>
            </Box>
            <Box sx={abilityStyles}>
              <img src={abilityIcon2} style={abilitySize} />
              <Typography variant="body2" sx={abilitySpacing}>
                {" "}
                0.78{" "}
              </Typography>
            </Box>
            <Box sx={abilityStyles}>
              <img src={abilityIcon3} style={abilitySize} />
              <Typography variant="body2" sx={abilitySpacing}>
                {" "}
                4.82{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
      <Box
        sx={{
          position: "relative",
          width: 140,
          zIndex: 999,
        }}
      >
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
  );
}
