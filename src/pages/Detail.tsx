import React from "react";
import Header from "../components/Header";
import { Data } from "../interface/model";

const Detail: React.FC = () => {
  return (
    <div>
      <Header />
      여기는 상세 학교 데이터
      <br />
      나중에 각 학교마다 가지고 있는 고유의 id값을 이용하여 그에 맞는 자세한
      정보를 띄울 것
    </div>
  );
};

export default Detail;
