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
}




export default function AgentCard({ name, agentImage, ability1, ability2, agentName }: AgentProps) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5">{name}</Typography>
          <Typography sx={{ fontFamily: 'Valorant', fontSize: 20 }} >
            {agentName}
          </Typography>
          <Typography sx={{ color: "red", fontSize: 8, display: "flex", justifyContent: "center", padding: 1 }}>
            {ability1}
          </Typography>
          <Typography sx={{ color: "red", fontSize: 8, display: "flex", justifyContent: "center", padding: 1 }}>
            {ability2}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia component="img" sx={{ width: 95 }} image={agentImage} />
    </Card>
  );
}
