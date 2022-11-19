import React from "react";
import "./App.css";
import Post from "./Post";
import SidePanel from "./SidePanel";

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
      <Box
        padding="25px 30px 30px 50px"
        style={
          {
            // backgroundImage: `url(https://ichef.bbci.co.uk/news/976/cpsprodpb/179C0/production/_125840769_hi077252483.jpg)`,
            // filter: "blur(50px)",
          }
        }
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3">Justly.</Typography>
          <IconButton aria-label="fingerprint" style={{ color: "#8891A4" }}>
            <AccountCircle style={{ fontSize: "45px" }} />
          </IconButton>
        </Box>
        <Box display="flex">
          <SidePanel />
          <Post />
        </Box>
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
