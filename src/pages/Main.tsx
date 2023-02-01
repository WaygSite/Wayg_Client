import React from "react";
import Data from "../components/GridData/GridData";
import Header from "../components/Header/Header";
import styled from "styled-components";

const Bg = styled.body`
  background-color: #f5f5f5;
`;
const Main: React.FC = () => {
  return (
    <Bg>
      <Header />
      <Data />
    </Bg>
  );
};

export default Main;
