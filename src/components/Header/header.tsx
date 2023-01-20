import React, { useState } from "react";
import * as S from "./header.style";
import LoginModal from "../LoginModal/LoginModal";

interface Props {}

const Header: React.FC<Props> = () => {
  const [state, setState] = useState(true);

  const Login = () => {
    setState(false);
  };

  return (
    <>
      <S.Header>
        <S.Right>
          <S.Img src="./img/logo.png"></S.Img>
          <S.LogoText>Wayg</S.LogoText>
        </S.Right>
        <S.Sign>
          <S.Login onClick={Login}>로그인</S.Login>

          <S.Join>회원가입</S.Join>
        </S.Sign>
      </S.Header>
      <S.LoginModal>
        {state ? null : (
          <S.Modal>
            <LoginModal />
          </S.Modal>
        )}
      </S.LoginModal>
    </>
  );
};

export default Header;
