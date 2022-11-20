import React from "react";
import MainLayout from "../components/MainLayout";
import NewPost from "../components/NewPost";

export const NewPostPage = (props: any) => {
  return (
    // <MainLayout children={<NewPost callback={() => {console.log("success!")}}/>}/>
    <MainLayout>
      <NewPost
        callback={() => {
          console.log("success!");
        }}
      />
    </MainLayout>
  );
};
