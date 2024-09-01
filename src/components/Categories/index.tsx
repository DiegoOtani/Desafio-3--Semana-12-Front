import { CategoriesProps } from './types';
import Checkbox from '../Checkbox';

const Categories = ({ title, subtitle, categories, onCategoryChange }: CategoriesProps) => {
  return <div className='bg-surface flex flex-col gap-2 px-10 py-4 text-h6 font-body'>
    {title && (
      <h3 className='font-extrabold pt-6'>{title}</h3>
    )}
    <h4 className='font-semibold'>{subtitle}</h4>
    {categories.map(categorie => (
      <Checkbox value={categorie} handleChange={(isChecked) => onCategoryChange(categorie, isChecked)}/>
    ))}    
  </div>
}

export default Categories;