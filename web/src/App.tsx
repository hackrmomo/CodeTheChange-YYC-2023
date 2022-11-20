// @ts-nocheck

import React from "react";
import "./App.css";
import Post from "./Post";
import SidePanel from "./SidePanel";
import Blur from "react-blur";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";

import { AccountCircle } from "@mui/icons-material";

export default function App() {
  return (
    <>
      <Box
        padding="25px 30px 30px 50px"
        style={{
          backgroundImage:
            "url(https://ichef.bbci.co.uk/news/976/cpsprodpb/179C0/production/_125840769_hi077252483.jpg)",
          backdropFilter: "blur(1000px)",
        }}
      >
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
        <Grid container>
          <Grid item xs={12} md={3}>
            <SidePanel />
          </Grid>
          <Grid item xs={12} md={6}>
            <Post />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
