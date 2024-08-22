export type CheckboxProps = {
  value: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}