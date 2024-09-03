import React from "react";

export type FilterProps = {
  onCategoryChange: (category: string, isChecked: boolean) => void;
  onDestinationChange: (destination: string, isChecked: boolean) => void;
  onRatingChange: (rating: string, isChecked: boolean) => void;
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement> ) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPriceSubmit: () => void;
  categories: string[];
  destinations: string[];
  reviews: string[];
  price: number;
  search: string;
};