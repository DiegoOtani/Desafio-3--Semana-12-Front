export type SliderProps<T> = {
  items: T[];
  renderItem: React.FC<T>;
  perPage: number;
};
