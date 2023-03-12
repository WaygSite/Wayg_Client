import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./IntroPageStyle";
import Blog from "../../pages/Blog";

interface PropsType {
  value: string;
  value2: string;
}

const Introduce: React.FC = () => {
  const [schoolName, setSchoolName] = useState("");
  const location = useLocation();
  const nav = useNavigate();
  const state = location.state as PropsType;
  console.log(state.value);
  console.log(state.value2);

  const handleClick = () => {
    window.location.href = `http://${state.value2}`;
  };
  const goToBlog = () => {
    nav("/Detail/Blog");
    setSchoolName(state.value);
  };

  return (
    <div>
      <S.Title>{state.value}</S.Title>
      <br />
      <button onClick={handleClick}>{state.value} 사이트로 가기</button>
      <br />
      <button onClick={goToBlog}>{state.value}블로그 보러가기</button>
    </div>
  );
};
export default Introduce;
