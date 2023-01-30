import React from "react";
import Header from "../components/Header";
import { Data } from "../interface/model";
interface DetailData {
  value: Data;
}
const Detail: React.FC<DetailData> = ({ value }) => {
  return (
    <div>
      <Header />
      {value.학교}
    </div>
  );
};

export default Detail;
