import { IconType } from "react-icons";

export type InputFieldType = {
  onChange: () => void;
  inputName?: string;
  Icon: IconType;
  placeholder: string;
}