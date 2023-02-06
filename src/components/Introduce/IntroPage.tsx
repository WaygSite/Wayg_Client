import { useLocation } from "react-router-dom";
import * as S from "./IntroPageStyle";

interface PropsType {
  value: string;
  value2: string;
}

const Introduce: React.FC = () => {
  const location = useLocation();

  const state = location.state as PropsType;
  console.log(state.value);
  console.log(state.value2);

  const handleClick = () => {
    window.location.href = `http://${state.value2}`;
  };

  return (
    <div>
      <S.Title>{state.value}</S.Title>
      <br />
      <button onClick={handleClick}>{state.value} 사이트로 가기</button>
    </div>
  );
};
export default Introduce;
