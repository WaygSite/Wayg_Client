import React from "react";
import Classification from "../components/Classification";
import Data from "../components/data";

import Header from "../components/Header";
import PageNation from "../components/PageNation";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Classification />
      <Data />
      <PageNation />
    </>
  );
};

export default Main;
