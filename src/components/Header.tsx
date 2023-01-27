import React from "react";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <input placeholder="진학하고 싶은 학교를 입력해주세요"></input>
      <button>로그인</button>
      <button>로그인</button>
      <hr />
    </div>
  );
};

export default Header;
