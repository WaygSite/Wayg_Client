import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header<{ trueOrFalse: boolean }>`
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  margin-bottom: 40px;
  justify-content: space-around;
  background-color: #03c988;
  ${({ trueOrFalse }) =>
    trueOrFalse
      ? null
      : css`
          position: fixed;
          top: 0;
          background-color: #03c988;
          border: 2px solid gray;
          animation: fadeInDown 1s;
          @keyframes fadeInDown {
            0% {
              transform: translate3d(0, -100%, 0);
            }
          }
        `}
  @media screen and (max-width: 1024px) {
  }
  z-index: 1;
`;

export const Input = styled.input`
  width: 35%;
  height: 5vh;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 10px;
  border: none;
  &::placeholder {
    font-size: 1rem;
    font-weight: bolder;
  }
  &:hover {
    border: 1px solid black;
  }
  @media screen and (max-width: 1024px) {
  }
`;
export const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #3e91de;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    width: 100px;
    background-color: #03529d;
  }
  @media screen and (max-width: 1024px) {
  }
`;
export const Home = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    color: #d8d8d8;
    font-size: 32px;
  }
  @media screen and (max-width: 1024px) {
  }
`;
export const LinkTag = styled(Link)`
  text-decoration: none;
`;
