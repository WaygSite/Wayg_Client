import React from "react";
import { Link } from "react-router-dom";
interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <input placeholder="진학하고 싶은 학교를 입력해주세요"></input>
      <button>로그인</button>
      <button>로그인</button>
      <Link to="/">홈으로</Link>
      <hr />
    </div>
  );
};

export default Header;
