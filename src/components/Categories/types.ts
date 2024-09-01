export type CategoriesProps = {
  title?: string;
  subtitle?: string;
  categories: string[];
  onCategoryChange: (category: string, isChecked: boolean) => (void);
};