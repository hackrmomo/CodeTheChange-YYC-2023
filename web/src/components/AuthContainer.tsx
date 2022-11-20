import React from "react";
import { styled } from "@mui/system";
import { TextField as MuiTextField } from "@mui/material";
import { useRef, useEffect} from 'react';

interface IAuthContainerProps {
  close: () => void;
  // dontClose: () => void;
}

export const AuthContainer = (props: IAuthContainerProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const  loginContainer = useRef(null)
  let isLoginContainer: boolean = false;

  const { close } = props;
  // const {dontClose} = props;
  
  return <>
    
    <RootContainer 
    onClick={() => {
      if(!isLoginContainer){
        close();
        
      }
      isLoginContainer=false;
      console.log(isLoginContainer)

    }}>

      <Container onClick={()=> {
        isLoginContainer = true
        console.log(isLoginContainer)
      }}>
        <p style={{fontFamily: 'Poppins, sans-serif', fontSize: '25px'}}>Justly.</p>
        <TextField placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} >
        </TextField>
        <TextField placeholder="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} >
        </TextField>
        <p style={{fontSize: '12px',cursor: 'pointer'}}>create account</p>
        <Button>LOGIN</Button>
      </Container>
    </RootContainer>
  </>
};

const Container = styled('div')`
  && {
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
    top: 0px;
    left: 0px;
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
    height: 3.0rem;
  }
`