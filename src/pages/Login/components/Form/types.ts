export type FormProps = {
  title: string;
  message: string;
  buttonText: string;
  handleSubmit: () => void;
  changeMessage: string;
  changeClickMessage: string;
  handleClick: () => void;
}