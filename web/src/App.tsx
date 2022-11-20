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
      <Box padding="25px 30px 30px 50px" style={{ backgroundColor: "black" }}>
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
        {/* <Box display="grid" gridTemplateColumns="1fr minmax(500px, 1fr) 1fr">
          <SidePanel />
          <Post />
        </Box> */}
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

      {/* <ElevationScroll>
        <AppBar>
          <Toolbar>YO</Toolbar>
        </AppBar>
      </ElevationScroll>
      <Post /> */}
    </>
  );
}

function ElevationScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
