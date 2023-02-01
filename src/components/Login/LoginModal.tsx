import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./LoginModalStyle";
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
  const HideModal = () => {
    name(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValue>();
  const onSubmitHandler: SubmitHandler<LoginValue> = (data) => {
    console.log(data);
  };

  return (
    <S.ModalContainer>
      <S.DialogBox name={false}>
        <S.Hide>
          <S.Button onClick={HideModal}>x</S.Button>
        </S.Hide>
        <S.Title>로그인</S.Title>

        <S.Content>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <S.Id
              placeholder="아이디를 입력하세요"
              {...register("id", { required: true, maxLength: 20 })}
            />
            {errors.id && errors.id.type === "required" && (
              <S.ErrorMsg>아이디를 입력해주세요</S.ErrorMsg>
            )}
            {errors.id && errors.id.type === "maxLength" && (
              <S.ErrorMsg>아이디는 최대 20자까지 가능합니다</S.ErrorMsg>
            )}
            <S.Pwd
              placeholder="비밀번호를 입력하세요"
              {...register("pwd", { required: true, maxLength: 20 })}
              type="password"
            />
            {errors.pwd && errors.pwd.type === "required" && (
              <S.ErrorMsg>비밀번호를 입력해주세요</S.ErrorMsg>
            )}
            {errors.pwd && errors.pwd.type === "maxLength" && (
              <S.ErrorMsg>비밀번호는 최대 20자까지 가능합니다</S.ErrorMsg>
            )}

            <S.Play type="submit" value="로그인" />
          </form>
          <S.Google>
            <S.Img src="./img/GoogleLogo.png" />
            <S.Text>Login with google</S.Text>
          </S.Google>
        </S.Content>
      </S.DialogBox>
      <S.Backdrop onClick={Convert}></S.Backdrop>
    </S.ModalContainer>
  );
};

export default Modal;
