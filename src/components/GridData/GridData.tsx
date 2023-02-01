import { fetchData } from "../../interface/api";
import { Data } from "../../interface/model";
import React, { useState, useEffect } from "react";
import Classification from "../Option/Classification";
import PageNation from "../PageNation/PageNation";
import * as S from "./GridDataStyle";
import styled from "styled-components";

interface Props {}

const Api: React.FC<Props> = () => {
  const [state, setState] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({});
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
    grid-template-columns: repeat(3, 25vw);
    grid-template-rows: repeat(${state.length - 95}, 60vh);
    column-gap: 30px;
    row-gap: 30px;
    justify-content: center;
  `;
  return (
    <div>
      {loading ? (
        <S.Loading>Loading...</S.Loading>
      ) : (
        <>
          <Classification />
          <GRID>
            {state.map((e: any, index) => (
              <S.GRID_ITEM key={index} onClick={() => setValue(e.학교)}>
                <S.LinkTag to={"/Detail"} state={{ value: e.학교 }}>
                  <S.SchoolImg>학교 사진</S.SchoolImg>

                  <S.Title>{e.학교}</S.Title>
                  {/* 나중에 바꿀거니까 경악하지마세요 */}
                  <S.Text>설립구분 : {e.설립구분}</S.Text>
                  <S.Text>고교유형 : {e.고교유형}</S.Text>
                  <S.Text>남녀공학 : {e.남녀공학구분}</S.Text>
                  <S.Text>학교주소 : {e.학교도로명주소}</S.Text>
                  <S.Text>학교번호 : {e.학교전화번호}</S.Text>
                  <S.Text>설립일자 : {e.설립일자}</S.Text>
                  <S.Text>우편번호 : {e.우편번호}</S.Text>
                </S.LinkTag>
              </S.GRID_ITEM>
            ))}
          </GRID>

          <PageNation />
        </>
      )}
    </div>
  );
};

export default Api;
