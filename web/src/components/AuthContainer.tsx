import React from "react";
import { styled } from "@mui/system";
import { TextField as MuiTextField } from "@mui/material";

interface IAuthContainerProps {
  close: () => void;
}

export const AuthContainer = (props: IAuthContainerProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { close } = props;
  return <>
    <RootContainer onClick={() => {
      close();
    }}>
      <Container>
        <TextField placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} >
        </TextField>
        <TextField placeholder="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} >
        </TextField>
      </Container>
    </RootContainer>
  </>
};

const Container = styled('div')`
  && {
    background: #1A1919;
    height: 60vh;
    width: 60vw;
    max-width: 700px;
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

const RootContainer = styled('div')`
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
  }
`

export const TextField = styled(MuiTextField)`
  && {
    background: #454545;
    border-radius: 16px;
    fieldset {
      border-radius: 16px;
      height: 3.5rem;
    }
    height: 3.3rem;
  }
`