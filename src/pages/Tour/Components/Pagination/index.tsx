import PaginationButton from "../PaginationButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  totalPages: number;
  actualPage: number;
  handlePageChange: (page: number) => void;
};

const Pagination = ({ totalPages, actualPage, handlePageChange }: PaginationProps) => {
  return <div className="flex justify-center gap-4">
    <PaginationButton content={MdKeyboardArrowLeft} handleClick={() => handlePageChange(Math.max(1, actualPage - 1))} actualPage={false}/>
    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <PaginationButton 
          key={page} 
          content={page.toString()} 
          handleClick={() => handlePageChange(page)} 
          actualPage={page.toString() === actualPage.toString()}
        />
      ))}
    <PaginationButton content={MdKeyboardArrowRight} handleClick={() => handlePageChange(Math.min(totalPages, actualPage + 1))} actualPage={false}/>
  </div>
};

export default Pagination;