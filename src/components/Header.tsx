import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

//styled
const Container = styled.div<{ trueOrFalse: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  margin-bottom: 20px;
  justify-content: space-around;
  ${({ trueOrFalse }) =>
    trueOrFalse
      ? null
      : css`
          position: fixed;
          background-color: white;
          border: 2px solid gray;
        `}
`;
const Input = styled.input`
  width: 50%;
  height: 5vh;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 10px;
  &::placeholder {
    font-size: 1rem;
    font-weight: bolder;
  }
`;

const Header: React.FC = () => {
  const [search, setSearch] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [trueOrFalse, setTrueOrFalse] = useState(true);
  //trueOrFalse가 거짓이면 position이 fixed로 설정
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
      if (scroll >= 260) {
        setTrueOrFalse(false);
      } else {
        setTrueOrFalse(true);
      }
    });
  }, [scroll]);
  console.log(trueOrFalse);
  const SearchSchool = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Container trueOrFalse={trueOrFalse}>
      <Link to="/">홈으로</Link>
      <Input
        placeholder="진학하고 싶은 학교를 입력해주세요"
        onChange={SearchSchool}
      ></Input>

      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </Container>
  );
};

export default Header;
