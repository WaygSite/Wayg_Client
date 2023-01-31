import React from "react";
import Data from "../components/data";
import Header from "../components/Header";
import styled from "styled-components";

const Bg = styled.body`
  background-color: #f4f4f4;
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
