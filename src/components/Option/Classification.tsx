import * as S from "./ClassificationStyle";

const Classification: React.FC = () => {
  return (
    <S.Container>
      <S.Select>
        <option value="고교유형">고교유형</option>
        <option value="일반고">일반고</option>
        <option value="특목고">특목고</option>
        <option value="자율고">자율고</option>
        <option value="특성화고">특성화고</option>
      </S.Select>
      <S.Select>
        <option value="남여구분">남여구분</option>
        <option value="일반고">남여공학</option>
        <option value="특목고">남고</option>
        <option value="자율고">여고</option>
      </S.Select>
    </S.Container>
  );
};

export default Classification;
