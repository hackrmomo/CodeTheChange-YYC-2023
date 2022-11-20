import React from "react";
import "./App.css";
import Post from "./Post";
import SidePanel from "./SidePanel";
import Navbar from "./Navbar";

import { Box, Typography, IconButton, Grid } from "@mui/material";

import { AccountCircle } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";

export default function MainPage(props: any) {
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <SidePanel />
      </Grid>
      <Grid item xs={12} md={6}>
        <Post />
      </Grid>
      <Grid item xs={12} md={3}></Grid>
    </Grid>
  );
}
