//하위 컴포넌트
import * as S from "./ClassificationStyle";
interface Props {
  onOptionChange: (option: string) => void;
}
const Classification: React.FC<Props> = ({ onOptionChange }) => {
  const handleChange = (e: any) => {
    onOptionChange(e.target.value);
  };
  return (
    // 옵션을 눌렀을 때 value값이 GridData (예 : 고교유형)과 일치하면 화면을 띄운다.
    <S.Container>
      <S.Select onChange={handleChange}>
        <option value="없음">없음</option>
        <option value="모든유형의 학교보기">모든유형의 학교보기</option>
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
