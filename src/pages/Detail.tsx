import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
interface PropsType {
  value: string;
}

const Detail: React.FC = () => {
  const location = useLocation();

  const state = location.state as PropsType;
  console.log(state.value);
  return (
    <>
      <Header />
      {state.value}
    </>
  );
};

export default Detail;
