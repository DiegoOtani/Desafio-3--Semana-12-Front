import { IconType } from "react-icons";

export type InputFieldType = {
  onChange: (value: string ) => void;
  inputName?: string;
  Icon: IconType;
  placeholder: string;
  value?: string;
  type: string;
}