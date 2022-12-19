import { useState } from "react";
import { PaginationList, PageNumber, CurrentPageNumber } from "./styles";

type PageSwitcherProps = {
  page: number;
  setPage: (value: number) => void;
};

export const PageSwitcher = ({ page, setPage }: PageSwitcherProps) => {
  const [currentPage, setCurrentPage] = useState<number>(page);

  const handleClick = (value: number) => {
    setPage(value);
    setCurrentPage(value);
  };

  return (
    <PaginationList>
      {Array.from({ length: 10 }).map((value, idx) => {
        const num = idx + 1;

        return (
          currentPage === num ?
            <CurrentPageNumber onClick={() => handleClick(num)} key={num}>
              {num}
            </CurrentPageNumber> :
            <PageNumber onClick={() => handleClick(num)} key={num}>
              {num}
            </PageNumber>
        );
      })}
    </PaginationList>
  )
};
