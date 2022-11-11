import { Grid, Stack, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import CSS from 'csstype';



const wordSize: CSS.Properties = {
    fontSize: "20px",

};
const winCenter: CSS.Properties = {
    display: "flex",
    justifyContent: "center"
};

const boxSize: CSS.Properties = {
    width: "25%"

}

const bolding: CSS.Properties = {
    fontWeight: "bold"
}

export default function StatsCard() {
    //Add bullet points
    //play a round with scale optioanl




    return (
        <Grid
            container
            display="flex"
            direction={"row"}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={8} xl={1}>
                <Card
                    sx={{
                        display: "flex",
                        width: "450px",
                        height: "250px",
                        zIndex: -1,
                        overflow: "visible",
                    }}
                >
                    <CardContent sx={{ width: "100%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography variant="h5" sx={{ display: "flex", alignItems: "center" }}>COMPETITIVE OVERVIEW</Typography>
                                <Button variant="outlined" sx={{ borderColor: "white" }}>ACT2:E3</Button>
                            </Stack>

                            <Box
                                sx={{
                                    display: "flex",
                                    padding: "10px 0px",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                <Stack direction="column" sx={{ display: "flex", alignItems: "center", }}>
                                    <Typography variant="h6">Win Rate</Typography>
                                    <Typography variant="h4">62.5%</Typography>
                                </Stack>
                                <Stack sx={winCenter}>
                                    <Typography variant="h5" sx={wordSize}>925 Win</Typography>
                                </Stack>
                                <Stack sx={winCenter}>
                                    <Typography variant="h5" sx={wordSize}>791 Lose</Typography>
                                </Stack>
                            </Box>
                            <Stack
                                display="flex"
                                flexDirection="row"
                                alignItems="baseline"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ width: "100%" }}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    sx={boxSize}>
                                    <Typography variant="body2">Kills</Typography>
                                    <Typography variant="body2" sx={bolding}>14,462</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    sx={boxSize}>
                                    <Typography variant="body2">Headshots</Typography>
                                    <Typography variant="body2" sx={bolding}>7,124</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    sx={boxSize}>
                                    <Typography variant="body2">Deaths</Typography>
                                    <Typography variant="body2" style={bolding}>11,531</Typography>
                                </Box>
                            </Stack>
                            <Stack
                                display="flex"
                                flexDirection="row"
                                alignItems="baseline"
                                justifyContent="space-between"
                                spacing={2}
                                sx={{ width: "100%" }}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    sx={boxSize}>
                                    <Typography variant="body2">Kills/Round</Typography>
                                    <Typography variant="body2" sx={bolding}>0.8</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    sx={boxSize}>
                                    <Typography variant="body2">Aces</Typography>
                                    <Typography variant="body2" sx={bolding}>24</Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    sx={boxSize}>
                                    <Typography variant="body2">Most Kills</Typography>
                                    <Typography variant="body2" style={bolding}>38</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </CardContent>

                </Card>
            </Grid>
        </Grid >
    );
}