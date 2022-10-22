import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface AgentProps {
  name?: string;
  agentImage?: string;
}

export default function AgentCard({ name, agentImage }: AgentProps) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5">Agent</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia component="img" sx={{ width: 95 }} image={agentImage} />
    </Card>
  );
}
