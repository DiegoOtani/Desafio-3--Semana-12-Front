import { SubmitButtonProps } from './types';

const SubmitButton = ({ onClick, text, size = 'large' }: SubmitButtonProps) => {
  return <button 
      type='button'
      className={`bg-brand_2 text-white font-normal rounded-lg p-2 hover:bg-red-500 text-h6
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