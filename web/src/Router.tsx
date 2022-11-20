import React from "react";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import NewPostPage from "./pages/NewPostPage";

import { styled } from "@mui/system";
import { Route, Routes, Navigate } from "react-router-dom";

export default function Router() {
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
            <Route path="/new-post" element={<NewPostPage newPost={true} />} />
          </Routes>
        </ContainerInner>
      </Container>
    </>
  );
}

const Container = styled('div')`
  && {
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