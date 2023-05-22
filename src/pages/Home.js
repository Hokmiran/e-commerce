import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RootContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

function Home() {
  return (
    <RootContainer>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Welcome to My Website
      </Typography>
    </RootContainer>
  );
}

export default Home;
