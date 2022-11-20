import React from "react";
import { styled } from "@mui/system";
import { TextField as MuiTextField, IconButton } from "@mui/material";
import axios from "axios";

import { Close } from "@mui/icons-material";

interface IAuthContainerProps {
  isVisible: boolean;
  close: () => void;
}

export const AuthContainer = (props: IAuthContainerProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [handle, setHandle] = React.useState("");
  const [isInCreateMode, setIsInCreateMode] = React.useState(false);

  const handleCreateAccount = async () => {
    const { data } = await axios
      .post("http://localhost:3000/users/add", {
        user: {
          handle, email, name
        }, password
      })

      console.log(data);
      // TODO: handle errors
      // TODO: handle success
    };
    
    const handleLogin = async () => {
      const { data } = await axios
      .post("http://localhost:3000/users/login", {
        email,
        password,
      })
      
      console.log(data);
      // TODO: handle errors
      // TODO: handle success
  };

  const { isVisible } = props;

  return <>
    <RootContainer isVisible={isVisible}>
      <Container>
        <CloseButton onClick={props.close} aria-label="close">
          <Close />
        </CloseButton>
        <StyledLogo>Justly.</StyledLogo>

        <TextField placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <TextField placeholder="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

        {isInCreateMode && <TextField placeholder="@Handle" type="text" value={handle} onChange={(e) => { setHandle(e.target.value) }} />}
        {isInCreateMode && <TextField placeholder="Name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />}

        <CreateAccountButton onClick={() => { setIsInCreateMode(!isInCreateMode) }}>{isInCreateMode ? "ALREADY HAVE AN ACCOUNT? LOGIN" : "CREATE ACCOUNT"}</CreateAccountButton>
        <LoginButton onClick={() => {
          if (isInCreateMode) {
            handleCreateAccount();
          } else {
            handleLogin();
          }
        }}>{isInCreateMode ? "CREATE ACCOUNT" : "LOGIN"}</LoginButton>
      </Container>
    </RootContainer>
  </>
};

const Container = styled('div')`
  && {
    position: relative;
    text-align: center;
    color: white;
    background: rgba(26,25,25,0.85);
    height: 60vh;
    width: 80vw;
    max-width: 400px;
    padding: 10px;
    border-radius: 16px;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > *{
      margin: 10px;
      width: 25vw;
      max-width: 350px;
    }
  }
`

const RootContainer = styled('div') <{ isVisible: boolean }>`
  && {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: #1A191933;
    z-index: 100;
    backdrop-filter: blur(10px);
    top: 0px;
    left: 0px;

    opacity: ${(props) => props.isVisible ? 1 : 0};
    pointer-events: ${(props) => props.isVisible ? "all" : "none"};

    transition: all 300ms ease-in-out;
  }
`
const Button = styled('div')`
  && {
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    align-items: center;
    background-color: #B8124D;
    float: right;
    max-width: 106px;
    height: 40px;
    line-height: 40px;
    padding: 4px;
    border-radius: 14px;
    vertical-align: baseline;
  }
`

export const TextField = styled(MuiTextField)`
  && {
    background: #454545;
    border-radius: 16px;
    width: 75vw;
    max-width: 300px;
    fieldset {
      border-radius: 16px;
      height: 3.5rem;
    }
    input {
      color: white;
    }
    height: 3.3rem;
  }
`

const StyledLogo = styled('p')`
  && { 
    font-family: Poppins, sans-serif;
    font-size: 25px;
  }
`

const CreateAccountButton = styled('a')`
  && {
    cursor: pointer;
    font-size: 12px;
  }
`

const CloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 20px;
    width: 20px;
    color: white;
  }
`

const LoginButton = styled(Button)`
  && {
    width: 75vw;
    max-width: 300px;
  }
`