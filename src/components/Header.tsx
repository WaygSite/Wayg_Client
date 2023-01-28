import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//styled
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  justify-content: space-around;
`;
const Input = styled.input`
  width: 50%;
  height: 5vh;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 10px;
  &::placeholder {
    font-size: 1rem;
    font-weight: bolder;
  }
`;
const Header: React.FC = () => {
  const [search, setSearch] = useState([]);
  const SearchSchool = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Link to="/">홈으로</Link>
      <Input
        placeholder="진학하고 싶은 학교를 입력해주세요"
        onChange={SearchSchool}
      ></Input>

      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </Container>
  );
};

export default Header;
