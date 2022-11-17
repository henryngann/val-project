import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CSS from "csstype";

const paperStyle: CSS.Properties = {
  position: "relative",
  width: "100%",
  borderRadius: "14px",
  backgroundColor: "#191B2A",
};

interface cardProps {
  title?: string;
  subtitle?: string;
  img?: string;
}
// add another prop to make subtitle more fancy
// example: subtitle: "Win Ratio 60.23"
// change h5 in themes to a nice looking font here and we'll use it here.
// use ternary operator to render a fancy subtitle or a regular subtitle
// fancyStyleProp ? <>fancyProp</> : <>regularProp</>
//  https://reactjs.org/docs/conditional-rendering.html
const GenericCard = ({ title, subtitle, img }: cardProps) => {
  return (
    <Paper elevation={9} style={paperStyle}>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction={"column"}
        spacing={2}
      >
        <Typography variant="h4">{title}</Typography>
        <img
          src={img}
          style={{
            width: "30%",
          }}
        />
        <Typography variant="h5">{subtitle}</Typography>
      </Stack>
    </Paper>
  );
};

export default GenericCard;
