import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

interface AgentPolaroid {
  agentImage: string;
  agentName: string;
}

//add alt prop here
//https://mui.com/material-ui/react-card/#main-content #1 Read This
//Use an appropiate template for the card
//Hint: maxHeight Increase
//TODO : Polaroid

export default function AgentSquare({ agentImage, agentName }: AgentPolaroid) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "60%",
        border: "1px solid grey",
        borderRadius: "2px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ maxHeight: 60, maxWidth: 40 }}
        image={agentImage}
        alt={agentName}
      />
      <CardContent style={{ backgroundColor: "#fff", padding: 0 }}>
        <Box
          sx={{
            width: "1rem",
            height: 30,
            display: "flex",

            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle2">{agentName}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
