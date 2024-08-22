import React from 'react'
import { CheckboxProps } from './types';

const Checkbox = ({ value, checked, handleChange }: CheckboxProps) => {
  return <label>
    <input 
      type="checkbox" 
      value={value}
      checked={checked}
      onChange={handleChange}
    />
    {value}
  </label>
}

export default Checkbox;