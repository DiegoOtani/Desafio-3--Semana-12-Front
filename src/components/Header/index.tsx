import React from 'react'
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaPinterestP, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../Logo';

const Header = () => {
  return <header>
    <div className='flex justify-between px-10 py-1 text-brand_1 bg-gray-100'>
      <p className='flex gap-4 text-body'>
        <span className='border-r border-brand_1 pr-4'>(000)999-898-999</span>
        <span>info@trisog.com</span>
      </p>
      <nav className='flex items-center justify-between w-36'>
        <a href="https://x.com/home" target='_blank'><FaTwitter size={14}/></a>
        <a href="https://www.linkedin.com/" target='_blank'><FaLinkedinIn size={14}/></a>
        <a href="https://www.google.com.br/" target='_blank'><FaGoogle size={14}/></a>
        <a href="https://br.pinterest.com/" target='_blank'><FaPinterestP size={14}/></a>
        <span className='flex items-center hover:cursor-pointer'>
          EUR
          <IoIosArrowDown size={14}/>
        </span>
      </nav>
    </div>
    <div className='flex w-full px-10 py-4 justify-between font-title font-normal items-center'>
      <nav className='flex justify-between w-[55%] items-center text-h6 font-medium text-brand_1'>
        <Logo />
        <a href="#" className='hover:underline decoration-brand_2 underline-offset-4'>Home</a>
        <a href="#" className='hover:underline decoration-brand_2 underline-offset-4'>About</a>
        <a href="#" className='hover:underline decoration-brand_2 underline-offset-4'>Tours</a>
        <a href="#" className='hover:underline decoration-brand_2 underline-offset-4'>Destination</a>
        <a href="#" className='hover:underline decoration-brand_2 underline-offset-4'>Blog</a>
        <a href="#" className='hover:underline decoration-brand_2 underline-offset-4'>Pages</a>
        <a href="#" className='hover:underline decoration-brand_2 underline-offset-4'>Contact</a>
      </nav>
      <div className='flex text-brand_1 gap-4'>
        <button type='button'>
          <BiSearch size={24}/>
        </button>
        <button className='flex font-bold gap-2'>
          <FiUser size={24}/>
          Login / Signup
        </button>
      </div>
    </div>
  </header>
}

export default Header