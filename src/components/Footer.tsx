import { Typography } from '@mui/material'
import { border, borderTop, display } from '@mui/system'
import React from 'react'

const myStyles = {
    textDecoration: "overline",
    color: "rgb(217, 217, 217)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"


}


const Footer = () => {
    return (
        <footer style={myStyles}>
            <Typography>Made with the power of friendship</Typography>
        </footer>
    )
}

export default Footer