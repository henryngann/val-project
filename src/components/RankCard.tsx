import { Grid, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CSS from "csstype";

const paperStyle: CSS.Properties = {
  position: "relative",
  width: "100%",
  borderRadius: "14px",
  backgroundColor: "#191B2A",
};

export default function RankCard() {
  return (
    <Paper elevation={9} style={paperStyle}>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction={"column"}
        spacing={2}
      >
        <Typography variant="h4">RATING</Typography>
        <img
          src="./assets/Diamond2.jpg"
          style={{
            width: "30%",
          }}
        />
        <Typography variant="h5" sx={{ fontSize: "18px" }}>
          DIAMOND 2
        </Typography>
      </Stack>
    </Paper>
  );
}
