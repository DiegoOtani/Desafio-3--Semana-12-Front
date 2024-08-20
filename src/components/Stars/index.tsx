import React from 'react'
import { IoIosStar } from "react-icons/io";

type StarProp = {
  value: number;
}

const Stars = ({ value }: StarProp) => {
  return <div className='flex items-center justify-center bg-brand_2 w-12 rounded'>
    <IoIosStar size={14} color='white'/>
    <span className='text-white pl-1 text-body font-light'>{value}</span>
  </div>
}

export default Stars;