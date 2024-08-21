import React from 'react'
import { FastLinksProps } from './types';

const FastLinks = ({ title, link1, link2, link3, link4 }: FastLinksProps) => {
  return <div className='flex flex-col gap-2 justify-end '>
    <h2 className='font-italic italic font-normal'>{title}</h2>
    <ul className='flex flex-col justify-between gap-3 font-normal text-gray-300'>
      <li><a href="#">{link1}</a></li>
      <li><a href="#">{link2}</a></li>
      <li><a href="#">{link3}</a></li>
      <li><a href="#">{link4}</a></li>
    </ul>
  </div>
}

export default FastLinks;