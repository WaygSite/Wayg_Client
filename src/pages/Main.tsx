import React from "react";
import Data from "../components/data";

import Header from "../components/Header";
import styled from "styled-components";
import Pagination from "react-js-pagination";
const PaginationBox = styled.div`
  margin-top: 20px;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: white;
  border: 1px solid gray;
  height: 10vh;
  align-items: center;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
    font-weight: bold;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;

const Bg = styled.body``;
const handlePageChange = (pageNumber: number) => {};
const Main: React.FC = () => {
  return (
    <Bg>
      <Header />
      <Data />
      <PaginationBox>
        <Pagination
          activePage={1}
          itemsCountPerPage={5}
          totalItemsCount={300}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        ></Pagination>
      </PaginationBox>
    </Bg>
  );
};

export default Main;
