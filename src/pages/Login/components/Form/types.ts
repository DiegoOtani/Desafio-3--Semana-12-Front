export type FormProps = {
  title: string;
  message: string;
  buttonText: string;
  handleSubmit: () => void;
  changeMessage: string;
  changeClickMessage: string;
  handleClick: () => void;
  handleChangeEmail: (email: string) => void;
  handleChangePassword: (password: string) => void;
  inputEmailValue: string;
  inputPasswordValue: string;
}