import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 3rem;
`;
interface PropsType {
  value: string;
}

const Introduce: React.FC = () => {
  const location = useLocation();

  const state = location.state as PropsType;
  console.log(state.value);
  return (
    <div>
      <Title>{state.value}</Title>
    </div>
  );
};
export default Introduce;
