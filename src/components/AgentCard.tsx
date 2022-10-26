import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
  /*
   color: "red",
              fontSize: 8,
              display: "flex",
              justifyContent: "center",
              padding: 1,
  */

  //TODO increase widith of these cards
  //Add bullet points
  //Position absolute, scale it, make head above cards.
  //add variants to typography
  //Set the background of these cards, get color values and set it background of car
  //add an alt prop to the image

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{agentName}</Typography>
          <Box sx={{}}>
            {/* Make this Box, a row and make these just like the design. Style it once in the design. */}
            <Typography>{ability1}</Typography>
            <Typography>{ability2}</Typography>
          </Box>
        </CardContent>
      </Box>
      <CardMedia sx={{ position: "relative", width: 300 }}>
        <img src={agentImage} style={{ position: "absolute", width: "100%" }} />
      </CardMedia>
    </Card>
  );
}
