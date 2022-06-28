import React from "react"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { CgHello } from "react-icons/cg"
import "./navbar.scss"

export const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "rgb(51, 71, 91)" }}>
      <Toolbar className="container">
        <Typography variant="h1">
          <p className="logo">B-Z movies</p>
        </Typography>
        <div className="navlinks">
          <CgHello className="link" />
        </div>
      </Toolbar>
    </AppBar>
  )
}
