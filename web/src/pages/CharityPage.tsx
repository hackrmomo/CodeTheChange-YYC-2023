import React from "react";
import { styled } from "@mui/system";
import { IconButton, Box, Typography, Grid, Rating} from "@mui/material";

import { ArrowBack } from "@mui/icons-material";

interface CharityPageProps {
  isVisible: boolean;
  close: () => void;
}

export const CharityPage = (props: CharityPageProps) => {
  const [value, setValue] = React.useState<number | null>(2);
  const { isVisible } = props;

  return <>
    <RootContainer isVisible={isVisible}>
      <Container>
        <CloseButtonContainer>
          <CloseButton onClick={props.close} aria-label="close">
            <ArrowBack />
          </CloseButton>
        </CloseButtonContainer>
        <ContentBox>
          <CharityBox>
            <img style={{marginBottom: "25px"}} height="50%" width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Canadian_Red_Cross.svg/1200px-Canadian_Red_Cross.svg.png"/>
            <Rating sx={{marginBottom: "25px"}} value={value} readOnly/>
            <Typography variant="h5">Causes</Typography>
            <Typography>Hurricane Fiona Disaster Relief</Typography>
          </CharityBox>
          <CharityBox>
            <Typography variant="h5">About
            </Typography>

            <Typography>
              Our Mission
              We help people and communities in Canada and around
              the world in times of need and support them in strengthening
              their resilience.
            </Typography>

          </CharityBox>
        </ContentBox>
      </Container>
    </RootContainer>
  </>
};

const Container = styled('div')`
  && {
    position: relative;
    text-align: center;
    color: white;
    background: #000000CC;
    height: 100%;
    width: 80vw;
    margin: 1in;
    padding: 10px;
    border-radius: 16px;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

const CloseButtonContainer = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const CloseButton = styled(IconButton)`
  && {
    height: 42px;
    width: 42px;
    color: white;
    svg {
      height: 42px;
      width: 42px;
    }
  }
`

const ContentBox = styled(Box)`
  && {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 100%;
  }
`

const CharityBox = styled(Box) `
  && {
    min-width: 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`