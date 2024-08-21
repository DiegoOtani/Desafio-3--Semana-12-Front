export type FormProps = {
  title: string;
  message: string;
  buttonText: string;
  handleSubmit: () => void;
  changeMessage: string;
  changeClickMessage: string;
  handleClick: () => void;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputEmailValue: string;
  inputPasswordValue: string;
}