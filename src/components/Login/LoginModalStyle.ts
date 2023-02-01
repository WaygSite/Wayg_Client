import styled, { css } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 12%;
  width: 100%;
  text-align: center;
  z-index: 1;
`;
export const DialogBox = styled.dialog<{ name: boolean }>`
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

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-top: 50px;
`;
export const Id = styled.input`
  width: 28vw;
  height: 5vh;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  padding-left: 15px;
  margin-top: 30px;
`;
export const Pwd = styled.input`
  width: 28vw;
  height: 5vh;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;

  border-radius: 10px;
  padding-left: 15px;
`;
export const Play = styled.input`
  width: 18vw;
  height: 5vh;
  cursor: pointer;
  margin-top: 30px;
`;
export const Google = styled.button`
  width: 28vw;
  height: 5vh;
  margin-top: 60px;
  background-color: white;
  border: 2px solid gray;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e9e9e9;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8) inset,
      0px 0px 5px rgba(200, 200, 200, 0.5);
  }
`;
export const Content = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorMsg = styled.div`
  margin-top: 5px;
  color: red;
  //위 오 아 왼
`;
export const Img = styled.img`
  width: 30px;
  height: auto;
`;
export const Text = styled.div`
  margin-left: 20px;
`;
export const Hide = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  justify-content: flex-end;
`;
export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: lightgray;
  &:hover {
    background-color: #9f9f9f;
  }
`;
