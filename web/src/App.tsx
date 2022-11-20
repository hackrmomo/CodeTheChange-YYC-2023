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
import { AuthContainer } from "./components/AuthContainer";

export default function App() {
  const [isAuthShown, setIsAuthShown] = React.useState(false);

  return (
    <>
      {isAuthShown && <AuthContainer close={() => { setIsAuthShown(false) }} />}
      <Container>
        <ContainerInner>
          <NavBar
          >
            <Logo>Justly.</Logo>
            <IconButton onClick={() => { setIsAuthShown(!isAuthShown) }} aria-label="account">
              <AccountCircle />
            </IconButton>
          </NavBar>
          <Grid container>
            <Grid item xs={12} md={3}>
              <SidePanel />
            </Grid>
            <CenteredGrid item xs={12} md={6}>
              <Post />
            </CenteredGrid>
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
  }
`

const NavBar = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    *{
      color: #FFFFFF;
    }
    svg {
      font-size: 45px; // icon size
    }
  }
`

const CenteredGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`