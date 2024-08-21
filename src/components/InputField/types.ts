import { IconType } from "react-icons";

export type InputFieldType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement> ) => void;
  inputName?: string;
  Icon: IconType;
  placeholder: string;
  value?: string;
  type: string;
}