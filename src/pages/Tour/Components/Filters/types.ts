export type FilterProps = {
  onCategoryChange: (category: string, isChecked: boolean) => void;
  onDestinationChange: (destination: string, isChecked: boolean) => void;
  onRatingChange: (rating: string, isChecked: boolean) => void;
};