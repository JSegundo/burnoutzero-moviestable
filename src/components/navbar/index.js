import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import "./navbar.scss"

export const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "rgb(51, 71, 91)" }}>
      <Toolbar className="container">
        <Typography variant="h4" className="logo">
          BZ movies
        </Typography>
        <div className="navlinks">
          <p className="link">About</p>
        </div>
      </Toolbar>
    </AppBar>
  )
}
