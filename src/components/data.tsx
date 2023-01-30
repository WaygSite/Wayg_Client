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
    &:hover {
      transform: translateY(-5px);
      z-index: 0;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 5px 5px 5px 5px gray;
    }
    &:not(:hover) {
      transition: all 0.3s ease;
      transform: translateY(5px);
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
    display: flex;
    align-items: center;
    height: 30vh;
    width: 495px;
    border-radius: 50px;
    justify-content: center;
  `;
  const Title = styled.div`
    font-size: 20px;
    margin-top: 10px;
    color: black;
    font-weight: bold;
    display: flex;
    justify-content: center;
  `;
  const LinkTag = styled(Link)`
    text-decoration: none;
  `;
  const Text = styled.div`
    color: black;
    display: flex;
    justify-content: center;
  `;

  return (
    <div>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <GRID>
          {state.map((e, index) => (
            <GRID_ITEM key={index}>
              <LinkTag to="/Detail">
                <SchoolImg>학교 사진</SchoolImg>
                <Title>{e.학교}</Title>
                <Text>설립구분 : {e.설립구분}</Text>
                <Text>고교유형 : {e.고교유형}</Text>
                <Text>남녀공학 : {e.남녀공학구분}</Text>
                <Text>학교주소 : {e.학교도로명주소}</Text>
                <Text>학교번호 : {e.학교전화번호}</Text>
                <Text>설립일자 : {e.설립일자}</Text>
              </LinkTag>
            </GRID_ITEM>
          ))}
        </GRID>
      )}
    </div>
  );
};

export default Api;
