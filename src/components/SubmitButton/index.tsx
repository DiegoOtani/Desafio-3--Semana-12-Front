import { SubmitButtonProps } from './types';

const SubmitButton = ({ onClick, text, size = 'large' }: SubmitButtonProps) => {
  return <button 
      type='button'
      className={`bg-brand_2 text-white font-normal rounded-lg px-2 py-3 hover:bg-red-500 text-subtitle font-body
        ${size === 'large'
          ? 'w-full'
          : 'w-[45%]'
        }  
      `}
      onClick={onClick}
    >
    {text}
  </button>
} 

export default SubmitButton;