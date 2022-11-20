// @ts-nocheck

import React from "react";
import "./App.css";
import Post from "./Post";
import SidePanel from "./SidePanel";
import Navbar from "./Navbar";
import MainPage from "./MainPage";

import { Box, Typography, IconButton, Grid } from "@mui/material";

import { AccountCircle } from "@mui/icons-material";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

export default function App() {
  console.log(axios.get("http://localhost:3000/users/all"));
  return (
    <>
      <Box
        style={{
          padding: "25px 30px 30px 50px",
          backgroundColor: "black",
        }}
      >
        <Navbar />
        <Grid container>
          <Grid item xs={12} md={3}>
            <SidePanel />
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
