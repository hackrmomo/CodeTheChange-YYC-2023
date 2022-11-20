import { Box, Typography, IconButton, Grid } from "@mui/material";

import React from "react";
import "./App.css";
import Post from "./Post";
import SidePanel from "./SidePanel";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

export default function Navbar() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="30px"
    >
      <Link to="/">
        <Typography className="" variant="h3" color="white">
          Justly.
        </Typography>
      </Link>
      <IconButton aria-label="fingerprint" style={{ color: "#8891A4" }}>
        <AccountCircle style={{ fontSize: "45px" }} />
      </IconButton>
    </Box>
  );
}
