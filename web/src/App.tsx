import React from "react";
import Post from "./Post";
import SidePanel from "./SidePanel";
import Navbar from "./Navbar";
import MainPage from "./MainPage";

import { styled } from "@mui/system";

import { Box, Typography, IconButton, Grid } from "@mui/material";

import { AccountCircle } from "@mui/icons-material";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

export default function App() {

  return (
    <>
      <Container>
        <ContainerInner>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/world-trending" />} />
            <Route
              path="/world-trending"
              element={<MainPage worldTrending={true} />}
            />
            <Route
              path="/new-events"
              element={<MainPage newEvents={true} />}
            />
            <Route path="/new-post" element={<MainPage newPost={true} />} />
          </Routes>
        </ContainerInner>
      </Container>
    </>
  );
}

const Container = styled('div')`
  && {
    /* background-image: url("https://ichef.bbci.co.uk/news/976/cpsprodpb/179C0/production/_125840769_hi077252483.jpg"); */
    /* background-position: center center; */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    height: 100vh;
    z-index: 10;
  }
  `

const ContainerInner = styled('div')`
  && {
    backdrop-filter: blur(30px);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 25px 30px 30px 50px;
    box-sizing: border-box;
    height: 100%;
    z-index: 20;
  }
`