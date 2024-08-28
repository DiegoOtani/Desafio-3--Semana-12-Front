export interface Tour {
  imgUrl: string;
  locale: string;
  title: string;
  stars: number;
  reviews: number;
  days: number;
  minPrice: number;
};

export interface TourReturned {
  id: string;
  name: string;
  city: string;
  country_name: string; 
  initial_date: string;
  end_date: string;
  duration: number;
  price_per_person: number;
  peoples: number;
  max_people: number;
  min_age: number;
  overview: string;
  location: string;
  ulrImg: string;
  types: string[];
  review_count: number;
  average_review: number;
};
