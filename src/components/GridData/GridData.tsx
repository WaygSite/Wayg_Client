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
            {/* 해석 : 만약에 하위 컴포넌트의 value가 들어있는 selectedOption이 모든유형의 학교보기와 같다면 모든 grid를 띄워줄것이며,
                그렇지 않고 자신이 선택한 고교유형과 현재 내가 가지고 있는 데이터에 있는 고교유형과 값이 같다면 그와 같은 grid만 랜더링을 해준다            
            */}
            {state.map(
              (e: any, index) =>
                (selectedOption === "모든유형의 학교보기" && (
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
                )) ||
                (e.고교유형 === selectedOption && (
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
                ))
            )}
          </GRID>

          <PageNation />
        </>
      )}
    </div>
  );
};

export default Api;
