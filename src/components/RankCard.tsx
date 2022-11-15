import { Grid, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CSS from "csstype";


const paperStyle: CSS.Properties = {
    position: "relative",
    width: "100%",
    borderRadius: "10%",
    backgroundColor: "#191B2A",
};


export default function RankCard() {
    return (
        <Grid item xs={6} md={4} xl={12}>
            <Paper elevation={9} style={paperStyle}>
                <Stack direction={"column"} spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h4" >
                        RATING
                    </Typography>
                    <img
                        src="./assets/Diamond2.jpg"
                        style={{
                            width: "30%"
                        }}
                    />
                    <Typography variant="h5" sx={{ fontSize: "18px" }}>
                        DIAMOND 2
                    </Typography>
                </Stack>
            </Paper>
        </Grid>
    );
}