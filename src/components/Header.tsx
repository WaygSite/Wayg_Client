import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

//styled
const Container = styled.div<{ trueOrFalse: boolean }>`
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  margin-bottom: 20px;
  justify-content: space-around;
  background-color: #03c988;
  ${({ trueOrFalse }) =>
    trueOrFalse
      ? null
      : css`
          position: fixed;
          top: 0;
          background-color: #03c988;
          border: 2px solid gray;
          animation: fadeInDown 1s;
          @keyframes fadeInDown {
            0% {
              transform: translate3d(0, -100%, 0);
            }
          }
        `}
  @media screen and (max-width: 1024px) {
  }
  z-index: 1;
`;

const Input = styled.input`
  width: 35%;
  height: 5vh;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 10px;
  &::placeholder {
    font-size: 1rem;
    font-weight: bolder;
  }
  @media screen and (max-width: 1024px) {
  }
`;
const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #3e91de;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    width: 100px;
    background-color: #03529d;
  }
  @media screen and (max-width: 1024px) {
  }
`;
const Home = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    color: #d8d8d8;
    font-size: 32px;
  }
  @media screen and (max-width: 1024px) {
  }
`;
const LinkTag = styled(Link)`
  text-decoration: none;
`;

const Header: React.FC = () => {
  const [search, setSearch] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [trueOrFalse, setTrueOrFalse] = useState(true);
  //trueOrFalse가 거짓이면 position이 fixed로 설정
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
      if (scroll >= 147) {
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
      <LinkTag to="/">
        <Home>Wayg</Home>
      </LinkTag>
      <Input
        placeholder="진학하고 싶은 학교를 입력해주세요"
        onChange={SearchSchool}
      ></Input>

      <div>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </div>
    </Container>
  );
};

export default Header;
