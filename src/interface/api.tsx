import React, { useState, useEffect } from "react";
import axios from "axios";

interface Data {
  학교: string;
  설립구분: string;
  고교유형: string;
  남녀공학구분: string;
  학교도로명주소: string;
  학교전화번호: number;
  설립일자: number;
}
const Api: React.FC = () => {
  const serverUrl = "http://localhost:3000/data";
  const [state, setState] = useState<Data[]>([]);
  const fetchData = async () => {
    const response = await axios.get(serverUrl);
    setState(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  state.map((e) => {
    console.log(
      e.설립구분 +
        " | " +
        e.고교유형 +
        " | " +
        e.학교 +
        " | " +
        e.남녀공학구분 +
        " | " +
        e.학교도로명주소 +
        " | " +
        e.학교전화번호 +
        " | " +
        e.설립일자
    );
  });
  return <div></div>;
};

export default Api;
