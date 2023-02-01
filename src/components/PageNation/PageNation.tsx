import Pagination from "react-js-pagination";
import { useState } from "react";
import * as S from "./PageNationStyle";
const PageNation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  console.log(currentPage);
  return (
    <S.PaginationBox>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={5}
        totalItemsCount={50}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      ></Pagination>
    </S.PaginationBox>
  );
};

export default PageNation;
