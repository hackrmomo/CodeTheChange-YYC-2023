import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import SidePanel from "../components/SidePanel";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { fetchTrendingPosts } from "../util/API";

const MAX_POST_LIMIT = 10;

export default function MainPage(props: any) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [number, setNumber] = useState(0);

  const loadPosts = async () => {
    setLoading(true);

    const trendingPosts = await fetchTrendingPosts();
    setNumber(trendingPosts.length);
    setPosts(trendingPosts);

    console.log(trendingPosts);

    setLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect!");
    loadPosts();
  });

  return (
    <>
      <Background />
      <ContainerOutter>
        <Container container>
          <Grid item xs={12} md={3}>
            <SidePanel />
          </Grid>
          <Grid item xs={12} md={6}>
            {!loading && <Post />}
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
