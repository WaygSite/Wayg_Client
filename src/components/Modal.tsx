import styled, { css } from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

const ModalContainer = styled.div`
  position: fixed;
  top: 12%;
  width: 100%;
  text-align: center;
  z-index: 1;
`;
const DialogBox = styled.dialog<{ name: boolean }>`
  width: 35vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  ${({ name }) =>
    name
      ? css`
          animation: fadeInDown 1s;
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translate3d(0, -100%, 0);
            }
            to {
              opacity: 1;
              transform: translateZ(0);
            }
          }
        `
      : null}
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-top: 50px;
`;
const Id = styled.input`
  width: 28vw;
  height: 5vh;
  font-size: 100%;
  font-weight: bold;
  border-radius: 10px;
  padding-left: 15px;
  margin-top: 30px;
`;
const Pwd = styled.input`
  width: 28vw;
  height: 5vh;
  font-size: 100%;
  font-weight: bold;
  margin-top: 30px;

  border-radius: 10px;
  padding-left: 15px;
`;
const Play = styled.input`
  width: 18vw;
  height: 5vh;
  cursor: pointer;
`;
const Google = styled.input`
  width: 28vw;
  height: 5vh;
  margin: 30px 0px 30px 0px;
  background-color: white;
  border: 2px solid gray;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;
const Content = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ErrorMsg = styled.div`
  margin-top: 5px;
  color: red;
  //위 오 아 왼
`;
interface Props {
  name: (open: boolean) => void;
  //boolean을 변수로 전달하는 것은 좋지 못한 습관이다
}
interface LoginValue {
  id: string;
  pwd: string;
}

const Modal: React.FC<Props> = ({ name }) => {
  const Convert = () => {
    name(true);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginValue>();
  const onSubmitHandler: SubmitHandler<LoginValue> = (data) => {
    console.log(data);
  };
  return (
    <ModalContainer>
      <DialogBox name={false}>
        <Title>로그인</Title>

        <Content>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Id
              placeholder="아이디를 입력하세요"
              {...register("id", { required: true, maxLength: 20 })}
            />
            {errors.id && errors.id.type === "required" && (
              <ErrorMsg>아이디를 입력해주세요</ErrorMsg>
            )}
            <Pwd
              placeholder="비밀번호를 입력하세요"
              {...register("pwd", { required: true, maxLength: 20 })}
            />
            {errors.pwd && errors.pwd.type === "required" && (
              <ErrorMsg>비밀번호를 입력해주세요</ErrorMsg>
            )}
            <Google type="submit" value="Login with google" />
            <Play type="submit" value="로그인" />
          </form>
        </Content>
      </DialogBox>
      <Backdrop onClick={Convert}></Backdrop>
    </ModalContainer>
  );
};

export default Modal;
