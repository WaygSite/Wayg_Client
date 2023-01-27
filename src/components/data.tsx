import { fetchData } from "../interface/api";
import { Data } from "../interface/model";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

interface Props {}

const Api: React.FC<Props> = () => {
  const [state, setState] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setState(data);
      setLoading(false);
    };
    fetch();
  }, []);
  console.log(state);

  const GRID = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 500px);
    grid-template-rows: repeat(${state.length > 0 ? state.length : 2}, 600px);
    column-gap: 30px;
    row-gap: 30px;
    justify-content: center;
  `;
  const GRID_ITEM = styled.div`
    background-color: #ddd;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
    font-weight: bold;
    height: 80vh;
  `;
  return (
    <div>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <GRID>
          {state.map((e, index) => (
            <GRID_ITEM key={index}>
              <div>학교이름 : {e.학교}</div>
              <div>설립구분 : {e.설립구분}</div>
              <div>고교유형 : {e.고교유형}</div>
              <div>남녀공학 : {e.남녀공학구분}</div>
              <div>학교주소 : {e.학교도로명주소}</div>
              <div>학교번호 : {e.학교전화번호}</div>
              <div>설립일자 : {e.설립일자}</div>
            </GRID_ITEM>
          ))}
        </GRID>
      )}
    </div>
  );
};

export default Api;
