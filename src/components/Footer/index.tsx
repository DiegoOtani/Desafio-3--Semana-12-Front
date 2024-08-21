import React, { useState } from 'react'
import Logo from '../Logo';
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbLocation } from "react-icons/tb";
import FastLinks from '../FastLinks';
import InputField from '../InputField';
import SubmitButton from '../SubmitButton';

const Footer = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ error, setError ] = useState<string>('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if(timeoutId) clearTimeout(timeoutId);
    const newTimeout = setTimeout(() => {
      return e.target.value === '' 
        ? setError('')
        : setError(!emailRegex.test(e.target.value) ? 'Invalid Email' : '')
    }, 1000);
    setTimeoutId(newTimeout);
  };

  const handleSubmit = () => {
    setEmail('');
    console.log(email);
  }

  return <footer className='flex justify-center items-top bg-black text-white w-full pt-20 pb-10'>
    <section className='flex flex-col pr-[5%]'>
      <Logo color='white' size='small'/>
      <span className='font-italic italic pt-4'>Need any help?</span>
      <p className='text-h6 font-semibold pb-4'>
        Call Us: 
        <span className='text-brand_2 pl-2'> 
          (888)1234 5678
        </span>
      </p>
      <p className='text-gray-300'>Love Street, Muscat, Oman</p>
      <p className='text-gray-300'>example@trisog.com</p>
      <div className='flex justify-start gap-4 text-white py-10'>
        <a href=""><FaFacebookSquare /></a>
        <a href=""><FaTwitter /></a>
        <a href=""><FaLinkedinIn /></a>
      </div>
    </section>
    <section className='flex h-2/3 gap-16 border-x pb-16 px-[5%]'>
      <FastLinks 
        title='Company'
        link1='About Us'
        link2='Contact Us'
        link3='Travel Guides'
        link4='Data Policy'
      />
      <FastLinks 
        title='Top Destination'
        link1='Las Vegas'
        link2='New York City'
        link3='San Francisco'
        link4='Hawaii'
      />
      <FastLinks 
        link1='Tokyo'
        link2='Sydney'
        link3='Melboume'
        link4='Dubai'
      />
    </section>
    <section className=' flex flex-col gap-2 pl-[5%]'>
      <h2 className='font-italic italic'>Sign up Newsletter</h2>
      <InputField 
        Icon={TbLocation} 
        placeholder='Enter email...' 
        type='text'
        onChange={handleChange}
        value={email}
      />
      {error && (
        <p className='text-brand_2'>{error}</p>
      )}
      <SubmitButton 
        onClick={handleSubmit} 
        text='Submit'
        size='small'
      />
      <p className='pt-10 text-gray-300'>&copy; 2023 Trisog All Right Reserved</p>
    </section>
  </footer>
} 

export default Footer;