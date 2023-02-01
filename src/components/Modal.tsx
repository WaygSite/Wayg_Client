import styled from "styled-components";
const ModalContainer = styled.div`
  position: fixed;
  top: 12%;
  width: 100%;
  text-align: center;
  z-index: 1;
`;
const DialogBox = styled.dialog`
  width: 40vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
interface Props {
  name: (open: boolean) => void;
}

const Modal: React.FC<Props> = ({ name }) => {
  const Convert = () => {
    name(true);
  };
  return (
    <ModalContainer>
      <DialogBox>모달창입니다</DialogBox>
      <Backdrop onClick={Convert}></Backdrop>
    </ModalContainer>
  );
};

export default Modal;
