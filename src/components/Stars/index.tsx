import { IoIosStar } from "react-icons/io";

type StarProp = {
  value: number;
}

const Stars = ({ value }: StarProp) => {
  return <div className='flex items-center justify-center bg-brand_2 w-12 rounded py-1'>
    <IoIosStar size={14} color='white'/>
    <span className='text-white pl-1 text-body font-light'>{Number(value).toFixed(1)}</span>
  </div>
}

export default Stars;