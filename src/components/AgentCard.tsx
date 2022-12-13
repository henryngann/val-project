import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
interface AgentProps {
  name?: string;
  agentName?: string;
  agentImage?: string;
  ability1?: string;
  ability2?: string;
  alt?: string;
}

export default function AgentCard({
  name,
  agentImage,
  ability1,
  ability2,
  agentName,
  alt,
}: AgentProps) {
  return (
    <Grid
      container
      display="flex"
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6} xl={1}>
        <Card
          sx={{
            display: "flex",
            width: "450px",
            height: "200px",
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
              <Typography variant="h5">{name}</Typography>
              <Typography variant="h6">{agentName}</Typography>
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="baseline"
                justifyContent="space-between"
                spacing={6}
                sx={{ width: "100%" }}
              >
                <Typography variant="body1">• {ability1}</Typography>
                <Typography variant="body1">• {ability2}</Typography>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
