import React from "react";
import Post from "./Post";
import SidePanel from "./SidePanel";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import Charities from "./Charities";

export default function MainPage(props: any) {
  const [takeAction, setTakeAction] = React.useState(false);

  const charity1 = {
    logo: "/redcross.jpg",
    name: "Canadian RedCross",
    trustLevel: 4,
    ratings: 30000,
    key: 1,
  };

  const charity2 = {
    logo: "redcross.jpg",
    name: "World Health Organization",
    trustLevel: 2,
    ratings: 2415,
    key: 2,
  };

  const orgs = [charity1, charity2];

  return (
    <>
      <Background />
      <ContainerOutter>
        <Container container>
          <Grid item xs={12} md={3}>
            <SidePanel />
          </Grid>
          <Grid item xs={12} md={6}>
            {!takeAction && (
              <Post takeAction={takeAction} setTakeAction={setTakeAction} />
            )}
            {takeAction && <Charities charities={orgs} />}
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Container>
      </ContainerOutter>
    </>
  );
}

const Background = styled("div")`
  && {
    position: absolute;
    background-image: url("https://ichef.bbci.co.uk/news/976/cpsprodpb/179C0/production/_125840769_hi077252483.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -100;
  }
`;

const Container = styled(Grid)`
  && {
  }
`;

const ContainerOutter = styled("div")`
  && {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    backdrop-filter: blur(30px);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 100px 30px 30px 50px;
    box-sizing: border-box;
    height: 100%;
  }
`;
