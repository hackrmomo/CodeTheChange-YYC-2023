import { Box, Typography, IconButton } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { styled } from "@mui/system";
import { AuthContainer } from "./AuthContainer";

export default function Navbar() {
  const [isAuthShown, setIsAuthShown] = React.useState(false);
  return (
    <>
      <AuthContainer isVisible={isAuthShown} close={() => { setIsAuthShown(false) }} />
      <NavBarBox>
        <Logo>
          <Link to="/">
            Justly.
          </Link>
        </Logo>
        <IconButton onClick={() => { setIsAuthShown(!isAuthShown) }} aria-label="account">
          <AccountCircle />
        </IconButton>
      </NavBarBox>
    </>
  );
}

const Logo = styled(Typography)`
  && {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 34px;
    a {
      text-decoration: none;
    }
  }
`

const NavBarBox = styled(Box)`
  && {
    position: fixed;
    width: calc(100vw - 80px);
    box-sizing: border-box;
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

    z-index: 200;
  }
`
