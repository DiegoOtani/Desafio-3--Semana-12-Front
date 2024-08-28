import { IconType } from "react-icons";
import { PaginationButtonProps } from "./types";

const PaginationButton = ({ content, handleClick, actualPage }: PaginationButtonProps) => {

  const isString = typeof content === 'string';
  const IconComponent = content as IconType;

  return <button 
    type="button" 
    disabled={actualPage}
    className={`border rounded-full w-10 h-10 flex items-center justify-center p-2
      ${actualPage && 'bg-brand_2 text-white'}  
      hover:border-brand_2
    `}
    onClick={handleClick}
  >
    {isString ? content : <IconComponent size={30} color="676D85"/>}
  </button>
};

export default PaginationButton;