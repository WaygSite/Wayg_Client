import { Link } from "react-router-dom";
import styled from "styled-components";

export const GRID_ITEM = styled.div`
  border: 2px solid black;
  background-color: white;
  border-radius: 50px;
  &:hover {
    transform: translateY(-5px);
    z-index: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 5px 5px 5px 5px gray;
  }
  &:not(:hover) {
    transition: all 0.3s ease;
    transform: translateY(5px);
  }
`;
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  font-weight: bold;
  height: 80vh;
`;
export const SchoolImg = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
  width: 100%;
  border-radius: 50px;
  justify-content: center;
`;
export const Title = styled.div`
  font-size: 100%;
  margin-top: 10px;
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;
export const LinkTag = styled(Link)`
  text-decoration: none;
`;
export const Text = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  font-size: 90%;
`;
