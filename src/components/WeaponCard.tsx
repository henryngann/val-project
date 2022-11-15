import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CSS from "csstype";


const paperStyle: CSS.Properties = {
    width: "100%",
    height: "20%",
    borderRadius: "10%",
    backgroundColor: "#191B2A",
};


export default function WeaponCard() {
    return (
        <Grid item xs={6} md={4} xl={12}>
            <Paper elevation={9} style={paperStyle}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h4" sx={{ padding: "15px" }}>
                        Top Weapon
                    </Typography>
                    <img
                        src="./assets/Prime.png"
                        style={{
                            width: "100%"
                        }}
                    />
                    <Stack direction={"row"} spacing={1} sx={{ alignItems: "center", padding: "15px" }}>
                        <Typography variant="h4" sx={{ fontSize: "16px" }}>
                            VANDAL
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "14px" }}>
                            Assault Rifles
                        </Typography>
                    </Stack>
                </Box>
            </Paper>
        </Grid>
    );
}