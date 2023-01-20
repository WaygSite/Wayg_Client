import * as S from "./LoginModal.style";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <form>
        <S.Id placeholder="아이디를 입력하세요" />
        <S.Pwd placeholder="비밀번호를 입력하세요" />
        <S.Sub type="submit" value="로그인" />
      </form>
    </S.Container>
  );
};

export default Login;
