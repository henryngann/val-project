import { Stack, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import CSS from 'csstype';




const wordSize: CSS.Properties = {
    fontSize: "20px",

};
const winContainer: CSS.Properties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "3px solid",
    width: "90px",
    height: "50px",
    borderColor: "#22B399",
    background: "linear-gradient(0.20turn, #1D393F, #232834)"
};

const loseContainer: CSS.Properties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "3px solid",
    width: "90px",
    height: "50px",
    borderColor: "#CC7176",
    background: "linear-gradient(0.20turn, #402A36, #252533)"
};

const boxSize: CSS.Properties = {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    borderLeft: "3px solid",
    borderColor: "#22B399",
    background: "linear-gradient(0.20turn, #1D393F, #232834)",
    alignItems: "flex-start",
}

const textColor: CSS.Properties = {
    color: "#A9ACB6"
}

const textLeft: CSS.Properties = {
    marginLeft: "5px"
}


export default function StatsCard() {
    //Add bullet points
    //play a round with scale optioanl

    return (
        <Card
            sx={{
                display: "flex",
                zIndex: -1,
                overflow: "visible",
                backgroundColor: "#191B2A"
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                        <Stack direction="column" sx={{
                            display: "flex", alignItems: "center", justifyContent: "center",
                            border: "8px solid white", borderRadius: "50%", height: "100px", width: "100px"
                        }}>
                            <Typography variant="h6" sx={{ color: "#A9ACB6" }}>Win Rate</Typography>
                            <Typography variant="h4">62.5%</Typography>
                        </Stack>
                        <Stack sx={winContainer}>
                            <Typography variant="h5" sx={wordSize}>925 Win</Typography>
                        </Stack>
                        <Stack sx={loseContainer}>
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
                            sx={boxSize}>
                            <Box sx={textLeft}>
                                <Typography variant="body2" sx={textColor}>Kills</Typography>
                                <Typography variant="body2"><b>14,462</b></Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={boxSize}>
                            <Box sx={textLeft}>
                                <Typography variant="body2" sx={textColor}>Headshots</Typography>
                                <Typography variant="body2"><b>7,124</b></Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={boxSize}>
                            <Box sx={textLeft}>
                                <Typography variant="body2" sx={textColor}>Deaths</Typography>
                                <Typography variant="body2"><b>11,531</b></Typography>
                            </Box>
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

                            sx={boxSize}>
                            <Box sx={textLeft}>
                                <Typography variant="body2" sx={textColor}>Kills/Round</Typography>
                                <Typography variant="body2"><b>0.8</b></Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={boxSize}>
                            <Box sx={textLeft}>
                                <Typography variant="body2" sx={textColor}>Aces</Typography>
                                <Typography variant="body2" ><b>24</b></Typography>
                            </Box>
                        </Box>
                        <Box

                            sx={boxSize}>
                            <Box sx={textLeft}>
                                <Typography variant="body2" sx={textColor}>Most Kills</Typography>
                                <Typography variant="body2" ><b>38</b></Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </CardContent>

        </Card>
    )
}