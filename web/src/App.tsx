// @ts-nocheck

import React from "react";
import "./App.css";
import Post from "./Post";
import SidePanel from "./SidePanel";
import Blur from "react-blur";
import Charities from "./Charities";

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
  const charity1 = {
    logo: "/redcross.jpg",
    name: "Canadian RedCross",
    trustLevel: 4,
    ratings: 30000,
  };

  const charity2 = {
    logo: "redcross.jpg",
    name: "World Health Organization",
    trustLevel: 2,
    ratings: 2415,
  };

  const orgs = [charity1, charity2];

  return (
    <>
      <Charities charities={orgs}></Charities>
    </>
  );
}
