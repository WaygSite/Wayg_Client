//상위 컴포넌트
import { fetchData } from "../../interface/api";
import { Data } from "../../interface/model";
import React, { useState, useEffect } from "react";
import Classification from "../Option/Classification";
import PageNation from "../PageNation/PageNation";
import * as S from "./GridDataStyle";
import styled from "styled-components";

const Api: React.FC = () => {
  const [state, setState] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({});
  const [site, setSite] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
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
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div>
      {loading ? (
        <S.Loading>지금 서버 안 열려있으니까 담에 찾아오세요</S.Loading>
      ) : (
        <>
          <Classification onOptionChange={handleOptionChange} />
          <GRID>
            {state.map((e: any, number) => {
              if (
                selectedOption === "모든 남여구분 보기" ||
                e.MaW === selectedOption
              ) {
                return (
                  <S.GRID_ITEM key={number}>
                    <S.LinkTag
                      to={"/Detail"}
                      state={{ value: e.SchoolName, value2: e.SiteAddr }}
                    >
                      <S.SchoolImg>학교 사진</S.SchoolImg>
                      <S.Title>{e.SchoolName}</S.Title>
                      <S.Text>설립구분 : {e.Institution}</S.Text>
                      <S.Text>고교유형 : {e.Type}</S.Text>
                      <S.Text>남녀공학 : {e.MaW}</S.Text>
                      <S.Text>학교주소 : {e.SiteAddr}</S.Text>
                    </S.LinkTag>
                  </S.GRID_ITEM>
                );
              }
            })}
          </GRID>

          <PageNation />
        </>
      )}
    </div>
  );
};

export default Api;
