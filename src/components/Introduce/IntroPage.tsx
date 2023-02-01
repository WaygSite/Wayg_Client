import { useLocation } from "react-router-dom";
import * as S from "./IntroPageStyle";

interface PropsType {
  value: string;
}

const Introduce: React.FC = () => {
  const location = useLocation();

  const state = location.state as PropsType;
  console.log(state.value);
  return (
    <div>
      <S.Title>{state.value}</S.Title>
    </div>
  );
};
export default Introduce;
