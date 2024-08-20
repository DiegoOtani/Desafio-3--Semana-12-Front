import React from 'react'
import Titles from '../../../../components/Titles'
import InputField from '../../../../components/InputField'
import SubmitButton from '../../../../components/SubmitButton';
import IconButton from '../IconButton';
import { FaLock, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FormProps } from './types';

const Form = ({ title, message, handleSubmit,buttonText, changeMessage, handleClick, changeClickMessage }: FormProps) => {
  return <form className='w-[35%] min-h-[80%] p-10 bg-surface border border-black rounded flex flex-col justify-between'>
    <Titles colorTitle='black' subtitle='Trisog' title={title}/>
    <h2 className='text-center text-h6 font-bold'>{message}</h2>
    <InputField Icon={AiOutlineMail} onChange={() => console.log('')} placeholder='Email...'/>
    <InputField Icon={FaLock} onChange={() => console.log('')} placeholder='Password...'/>
    <SubmitButton onClick={handleSubmit} text={buttonText}/>
    <div className='flex gap-6'>
      <IconButton Icon={FcGoogle} handleClick={() => console.log('google')}/>
      <IconButton Icon={FaFacebook}  handleClick={() => console.log('facebook')}/>
    </div>
    <p className='flex justify-center gap-4 font-semibold'>{changeMessage}
      <span className='text-brand_2 hover:cursor-pointer hover:text-red-600 font-price font-bold'
        onClick={handleClick}
      >
        {changeClickMessage}
      </span>
    </p>
  </form>
} 

export default Form;