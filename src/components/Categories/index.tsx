import { CategoriesProps } from './types';
import Checkbox from '../Checkbox';

const Categories = <T extends string>({ title, subtitle, categories, onCategoryChange, selectedItems }: CategoriesProps<T>) => {
  return <div className='bg-surface flex flex-col gap-2 px-10 py-4 text-h6 font-body'>
    {title && (
      <h3 className='font-extrabold pt-6'>{title}</h3>
    )}
    <h4 className='font-semibold'>{subtitle}</h4>
    {categories.map(categorie => (
      <Checkbox 
        key={categorie}
        value={categorie} 
        checked={selectedItems?.includes(categorie)}
        handleChange={(isChecked) => onCategoryChange(categorie, isChecked)}
      />
    ))}    
  </div>
}

export default Categories;