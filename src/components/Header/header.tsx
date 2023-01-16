import * as S from "./header.style";

export default function Header() {
  return (
    <S.Header>
      <S.Right>
        <S.Img src="./img/logo.png"></S.Img>
        <S.LogoText>Wayg</S.LogoText>
      </S.Right>
      <S.Sign>
        <S.Login>로그인</S.Login>
        <S.Join>회원가입</S.Join>
      </S.Sign>
    </S.Header>
  );
}
