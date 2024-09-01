import { CheckboxProps } from './types';

const Checkbox = ({ value, handleChange }: CheckboxProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.checked);
  };

  return <label className='text-bodyColor flex gap-2 text-h6 items-center'>
    <input 
      className='hidden peer'
      type="checkbox" 
      value={value}
      onChange={handleInputChange}
    />
    <div className='w-4 h-4 border-2 border-bodyColor rounded peer-checked:bg-brand_2 peer-focus:ring'></div>
    {value}
  </label>
}

export default Checkbox;