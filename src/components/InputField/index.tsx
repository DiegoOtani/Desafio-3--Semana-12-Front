import { InputFieldType } from './types';

const InputField = ({ onChange, inputName, Icon, placeholder, value, type, size = 'large' }: InputFieldType) => {
  return <div className={`
      ${size === 'large'
        ? 'w-full'
        : 'w-[85%]'
      }
    `}>
      <p className='text-secondary font-italic font-semibold italic'>{inputName}</p>
      <div className='flex justify-start items-center border font-normal rounded-lg p text-secondary-40 bg-white p-2 text-h6'>
        <Icon />
        <input 
          onChange={onChange}
          className='px-1 focus:outline-none w-full'
          type={type} 
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
}

export default InputField;