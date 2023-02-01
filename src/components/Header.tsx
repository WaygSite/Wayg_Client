import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Modal from "./LoginModal";

//styled
const Container = styled.header<{ trueOrFalse: boolean }>`
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  margin-bottom: 40px;
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
  border: none;
  &::placeholder {
    font-size: 1rem;
    font-weight: bolder;
  }
  &:hover {
    border: 1px solid black;
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
  const [trueOrFalse, setTrueOrFalse] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  //trueOrFalse가 거짓이면 position이 fixed로 설정
  //먼저 헤더부분의 높이를 가져온 후 그 높이랑 스크롤 위치가 같을 때 trueOrFalse에 false값을 넣어주고 css에서 애니메이션을 적용해주면 됨
  //이제 실천으로 옮기면 되는데 헤더높이를 js에서 어떻게 가져오노;;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight;
      const currentScrollPosition = window.pageYOffset;
      console.log(
        "헤더 : " + headerHeight + "스크롤 : " + currentScrollPosition
      );
      if (Number(headerHeight) <= Number(currentScrollPosition)) {
        setTrueOrFalse(false);
      } else {
        setTrueOrFalse(true);
      }
    });
  }, []);
  console.log(trueOrFalse);
  const SearchSchool = (e: any) => {
    setSearch(e.target.value);
  };
  const Login = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Container trueOrFalse={trueOrFalse}>
        <LinkTag to="/">
          <Home>Wayg</Home>
        </LinkTag>
        <Input
          placeholder="진학하고 싶은 학교를 입력해주세요"
          onChange={SearchSchool}
        ></Input>

        <div>
          <Button onClick={Login}>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </Container>
      {isOpenModal ? null : <Modal name={setIsOpenModal}></Modal>}
      {/* error 고치기 */}
    </>
  );
};

export default Header;
