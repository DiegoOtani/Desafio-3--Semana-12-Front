import React from 'react'
import { CategoriesProps } from './types';
import Checkbox from '../Checkbox';

const Categories = ({ title, categories }: CategoriesProps) => {
  return <div>
    <h3>{title}</h3>
    {categories.map(categorie => (
      <Checkbox value={categorie} checked={true} handleChange={() => console.log('')}/>
    ))}    
  </div>
}

export default Categories;