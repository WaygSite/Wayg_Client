import styled from "styled-components";

const Select = styled.select`
  width: 200px;
  padding: 0.8em 0.5em;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #000000;
  font-family: inherit;
  background: url("./img/arrow.jpg") no-repeat 100% 60%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-left: 10px;
`;
const Container = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
`;
const Classification: React.FC = () => {
  return (
    <Container>
      <Select>
        <option value="고교유형">고교유형</option>
        <option value="일반고">일반고</option>
        <option value="특목고">특목고</option>
        <option value="자율고">자율고</option>
        <option value="특성화고">특성화고</option>
      </Select>
      <Select>
        <option value="남여구분">남여구분</option>
        <option value="일반고">남여공학</option>
        <option value="특목고">남고</option>
        <option value="자율고">여고</option>
      </Select>
    </Container>
  );
};

export default Classification;
