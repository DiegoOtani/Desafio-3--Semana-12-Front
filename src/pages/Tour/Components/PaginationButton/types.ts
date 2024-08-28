import { IconType } from "react-icons";

export type PaginationButtonProps = {
  content: string | IconType;
  handleClick: () => void;
  actualPage: boolean;
};