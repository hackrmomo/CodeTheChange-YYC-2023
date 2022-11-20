import React from "react";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";

import { styled } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { InternalDataRefresh } from "./util/dataPersistor";

export default function Router() {
  return (
    <>
      <InternalDataRefresh>
        <Container>
          <ContainerInner>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage worldTrending />} />
              <Route path="/world-trending" element={<MainPage worldTrending />} />
              <Route path="/new-events" element={<MainPage newEvents />} />
              <Route path="/new-post" element={<MainPage newPost />} />
              <Route path="/charity/:handle" element={<MainPage charity />} />
            </Routes>
          </ContainerInner>
        </Container>
      </InternalDataRefresh>
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