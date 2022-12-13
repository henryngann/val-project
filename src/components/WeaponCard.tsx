import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CSS from "csstype";

const paperStyle: CSS.Properties = {
  width: "100%",
  borderRadius: "10%",
  backgroundColor: "#191B2A",
  padding: "10px",
};

//Find the MUI Element responsible for Paper styles.
//Change Paper styles so that it has padding of 10px in theme.ts
//
export default function WeaponCard() {
  return (
    <Paper elevation={9} style={paperStyle}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4">Top Weapon</Typography>
        <img
          src="./assets/Prime.png"
          style={{
            width: "100%",
          }}
        />
        <Stack direction={"row"} spacing={1} alignItems="center">
          <Typography variant="h4">VANDAL</Typography>
          <Typography variant="body1">Assault Rifles</Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
