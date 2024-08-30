import { useState } from 'react'
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

  return <footer className='flex justify-center items-top bg-black text-white w-full h-auto pt-32 pb-10 px-10'>
    <section className='flex flex-col pr-[5%] gap-1'>
      <Logo color='white' size='small'/>
      <span className='font-italic font-extralight pt-10 text-surface'>Need any help?</span>
      <p className='text-h6 font-bold pb-4 font-body'>
        Call Us: 
        <span className='text-brand_2 pl-2 '> 
          (888)1234 5678
        </span>
      </p>
      <p className='text-gray-300 text-h6 font-body'>Love Street, Muscat, Oman</p>
      <p className='text-gray-300 text-h6 font-body'>exaample@trisog.com</p>
      <div className='flex justify-start gap-4 text-white py-10'>
        <a href="https://www.facebook.com/" target='_blank'><FaFacebookSquare size={20}/></a>
        <a href="https://x.com/home" target='_blank'><FaTwitter size={20}/></a>
        <a href="https://www.linkedin.com/" target='_blank'><FaLinkedinIn size={20}/></a>
      </div>
    </section>
    <section className='flex h-2/3 gap-16 border-x border-gray-600 pb-16 px-[5%]'>
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
        link3='Melbourne'
        link4='Dubai'
      />
    </section>
    <section className=' flex flex-col gap-4 pl-[5%]'>
      <h2 className='font-italic font-normal'>Sign up Newsletter</h2>
      <InputField 
        Icon={TbLocation} 
        placeholder='Enter email...' 
        type='text'
        onChange={handleChange}
        value={email}
        size='medium'
      />
      {error && (
        <p className='text-brand_2'>{error}</p>
      )}
      <SubmitButton 
        onClick={handleSubmit} 
        text='Submit'
        size='small'
      />
      <p className='pt-10 text-gray-300 text-h6 font-body'>&copy; 2023 Trisog All Right Reserved</p>
    </section>
  </footer>
} 

export default Footer;