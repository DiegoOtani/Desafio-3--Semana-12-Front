import PaginationButton from "../PaginationButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  totalPages: number;
  acutalPage: number;
  handlePageChange: (page: number) => void;
};

const Pagination = ({ totalPages, acutalPage, handlePageChange }: PaginationProps) => {
  return <div className="flex justify-center gap-4">
    <PaginationButton content={MdKeyboardArrowLeft} handleClick={() => console.log('ae')} actualPage={false}/>
    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <PaginationButton 
          key={page} 
          content={page.toString()} 
          handleClick={() => handlePageChange(page)} 
          actualPage={page.toString() === acutalPage.toString()}
        />
      ))}
    <PaginationButton content={MdKeyboardArrowRight} handleClick={() => console.log('ae')} actualPage={false}/>
  </div>
};

export default Pagination;