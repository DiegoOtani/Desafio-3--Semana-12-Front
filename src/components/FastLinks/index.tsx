import { FastLinksProps } from './types';

const FastLinks = ({ title, link1, link2, link3, link4 }: FastLinksProps) => {
  return <div className='flex flex-col gap-4 justify-end '>
    <h2 className='font-italic font-light'>{title}</h2>
    <ul className='flex flex-col justify-between gap-4 font-semibold text-gray-300 text-h6 font-body'>
      <li><a href="#">{link1}</a></li>
      <li><a href="#">{link2}</a></li>
      <li><a href="#">{link3}</a></li>
      <li><a href="#">{link4}</a></li>
    </ul>
  </div>
}

export default FastLinks;