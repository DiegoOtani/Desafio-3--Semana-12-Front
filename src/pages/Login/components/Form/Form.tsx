import Titles from '../../../../components/Titles'
import InputField from '../../../../components/InputField'
import SubmitButton from '../../../../components/SubmitButton';
import IconButton from '../IconButton';
import { FaLock, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FormProps } from './types';
import { signWithGoogle, signInWithFacebook } from '../../../../services/firebase/firebaseService';

const Form = (
  { 
    title, 
    message, 
    handleSubmit,
    buttonText, 
    changeMessage, 
    handleClick, 
    changeClickMessage, 
    handleChangeEmail, 
    handleChangePassword,
    inputEmailValue,
    inputPasswordValue    
  }: FormProps) => {
  const handleGoogleLogin = async() => {
    const { user , error: firebaseError} = await signWithGoogle();
    return firebaseError || !user 
      ? console.log(firebaseError)
      : console.log(user);
  };

  const handleFacebookLogin = async() => {
    const { user, error: firebaseError } = await signInWithFacebook();
    return firebaseError || !user
      ? console.log(firebaseError)
      : console.log(user);
  };

  return <form className='w-[30%] min-h-[600px] max-h-[60%] p-10 bg-surface border border-black rounded flex flex-col justify-between'>
    <Titles colorTitle='black' subtitle='Trisog' title={title}/>
    <h2 className='text-center text-h6 font-bold'>{message}</h2>
    <InputField 
      Icon={AiOutlineMail} 
      onChange={handleChangeEmail} 
      placeholder='Email...'
      value={inputEmailValue}
      type='text'
    />
    <InputField 
      Icon={FaLock} 
      onChange={handleChangePassword} 
      placeholder='Password...'
      value={inputPasswordValue}
      type='password'
    />
    <SubmitButton onClick={handleSubmit} text={buttonText}/>
    <div className='flex gap-6'>
      <IconButton Icon={FcGoogle} handleClick={handleGoogleLogin}/>
      <IconButton Icon={FaFacebook}  handleClick={handleFacebookLogin}/>
    </div>
    <p className='flex justify-center gap-4 font-semibold'>{changeMessage}
      <span className='text-brand_2 hover:cursor-pointer hover:text-red-600 font-italic font-bold'
        onClick={handleClick}
      >
        {changeClickMessage}
      </span>
    </p>
  </form>
} 

export default Form;