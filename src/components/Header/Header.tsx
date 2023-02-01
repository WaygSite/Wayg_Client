import React, { useState, useEffect } from "react";
import Modal from "../Login/LoginModal";
import * as S from "./HeaderStyle";

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
      <S.Container trueOrFalse={trueOrFalse}>
        <S.LinkTag to="/">
          <S.Home>Wayg</S.Home>
        </S.LinkTag>
        <S.Input
          placeholder="진학하고 싶은 학교를 입력해주세요"
          onChange={SearchSchool}
        ></S.Input>

        <div>
          <S.Button onClick={Login}>로그인</S.Button>
          <S.Button>회원가입</S.Button>
        </div>
      </S.Container>
      {isOpenModal ? null : <Modal name={setIsOpenModal}></Modal>}
      {/* error 고치기 */}
    </>
  );
};

export default Header;
