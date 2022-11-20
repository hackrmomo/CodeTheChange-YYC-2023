import { Box, Typography, IconButton, Grid } from "@mui/material";

import React from "react";
import "./App.css";
import Post from "./Post";
import SidePanel from "./SidePanel";

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
      <Typography variant="h3" color="white">
        Justly.
      </Typography>
      <IconButton aria-label="fingerprint" style={{ color: "#8891A4" }}>
        <AccountCircle style={{ fontSize: "45px" }} />
      </IconButton>
    </Box>
  );
}
