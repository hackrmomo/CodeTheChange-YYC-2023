import React from "react";
import "./App.css";
import Post from "./Post";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Box,
  Container,
  Typography,
  IconButton,
} from "@mui/material";

import { AccountCircle } from "@mui/icons-material";

export default function App() {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h3">Justly.</Typography>
        <IconButton aria-label="fingerprint" color="secondary">
          <AccountCircle />
        </IconButton>
      </Box>
      <Post />
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
