import React from 'react'
import { CheckboxProps } from './types';

const Checkbox = ({ value, handleChange }: CheckboxProps) => {
  return <label className='text-gray-400 flex gap-2 text-h6 items-center'>
    <input 
      className='hidden peer'
      type="checkbox" 
      value={value}
      onChange={handleChange}
    />
    <div className='w-4 h-4 border-2 border-gray-400 rounded peer-checked:bg-brand_2 peer-focus:ring'></div>
    {value}
  </label>
}

export default Checkbox;