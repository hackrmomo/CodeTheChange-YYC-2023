import React from "react";

import Post from "./Post";
import SidePanel from "./SidePanel";
import Charities from "./Charities";

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import Navbar from "./Navbar";
import MainPage from "./MainPage";

import { styled } from "@mui/system";
import { Route, Routes, Navigate } from "react-router-dom";

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
            <Route path="/new-events" element={<MainPage newEvents={true} />} />
            <Route path="/new-post" element={<MainPage newPost={true} />} />
          </Routes>
        </ContainerInner>
      </Container>
    </>
  );
}

const Container = styled("div")`
  && {
    height: 100vh;
    z-index: 10;
  }
`;
