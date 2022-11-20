import React from "react";
import Post from "./Post";
import SidePanel from "./SidePanel";

import {
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";

import { styled } from "@mui/system";

import { AccountCircle } from "@mui/icons-material";

export default function App() {
  return (
    <>
      <Container>
        <ContainerInner>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="30px"
          >
            <Logo>Justly.</Logo>
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
        </ContainerInner>
      </Container>
    </>
  );
}

const Logo = styled(Typography)`
  && {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 36px;
  }
`

const Container = styled('div')`
  && {
    background-image: url("https://ichef.bbci.co.uk/news/976/cpsprodpb/179C0/production/_125840769_hi077252483.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  `

const ContainerInner = styled('div')`
  && {
    backdrop-filter: blur(30px);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 25px 30px 30px 50px;
    box-sizing: border-box;
    height: 100%;
  }
`