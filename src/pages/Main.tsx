import React, { useState, useEffect } from "react";
import axios from "axios";

interface MainProps {}

interface Data {
  학교: string;
  설립구분: string;
  고교유형: string;
  남녀공학구분: string;
  학교도로명주소: string;
  학교전화번호: string;
  설립일자: string;
}
const Main: React.FC<MainProps> = () => {
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
  return (
    <div>
      {state.map((e) => (
        <>
          <div>설립구분 : {e.설립구분}</div>
          <div>고교유형 : {e.고교유형}</div>
          <div>학교이름 : {e.학교}</div>
          <div>남녀공학 : {e.남녀공학구분}</div>
          <div>학교주소 : {e.학교도로명주소}</div>
          <div>학교번호 : {e.학교전화번호}</div>
          <div>설립일자 : {e.설립일자}</div>
          <hr></hr>
        </>
      ))}
    </div>
  );
};

export default Main;
