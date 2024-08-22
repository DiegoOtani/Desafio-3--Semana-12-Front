import React from 'react'
import { CategoriesProps } from './types';
import Checkbox from '../Checkbox';

const Categories = ({ title, subtitle, categories }: CategoriesProps) => {
  return <div className='bg-surface flex flex-col gap-2 p-10 text-h6 font-body'>
    <h3 className='font-extrabold'>{title}</h3>
    <h4 className='font-semibold pt-1'>{subtitle}</h4>
    {categories.map(categorie => (
      <Checkbox value={categorie} handleChange={() => console.log('')}/>
    ))}    
  </div>
}

export default Categories;