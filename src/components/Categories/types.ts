export type CategoriesProps<T> = {
  title?: string;
  subtitle?: string;
  categories: T[];
  onCategoryChange: (category: T, isChecked: boolean) => (void);
  selectedItems?: T[];
};