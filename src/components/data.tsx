import { fetchData } from "../interface/api";
import { Data } from "../interface/model";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const GRID = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 500px);
    grid-template-rows: repeat(${state.length - 71}, 600px);
    column-gap: 30px;
    row-gap: 30px;
    justify-content: center;
  `;
  const GRID_ITEM = styled.div`
    border: 2px solid black;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      transform: translateY(-15px);
      z-index: 0;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 5px 5px 5px 5px gray;
    }
    &:not(:hover) {
      transition: all 0.3s ease;
      transform: translateY(15px);
    }
  `;
  const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
    font-weight: bold;
    height: 80vh;
  `;
  const SchoolImg = styled.div`
    border: 2px solid red;
    display: flex;
    align-items: center;
    height: 30vh;
    width: 500px;
    border-radius: 50px;
    justify-content: center;
  `;
  const Title = styled.div`
    font-size: 20px;
    margin-top: 10px;
    color: black;
    font-weight: bold;
  `;
  const LinkTag = styled(Link)`
    text-decoration: none;
  `;
  return (
    <div>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <GRID>
          {state.map((e, index) => (
            <GRID_ITEM key={index}>
              <SchoolImg>학교 사진</SchoolImg>
              <LinkTag to="/Detail">
                <Title>{e.학교}</Title>
              </LinkTag>
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
