export interface ReviewReturned {
  avg_services: number;
  avg_prices: number;
  avg_locations: number;
  avg_food: number;
  avg_amenities: number;
  avg_room_comfort_quality: number;
  avg_overall: number;
};

export interface ReviewUserReturnded {
  date_review: string;
  name: string;
  average_rating: number;
  comment: string;
  review_count_by_user: number;
};

export interface CompleteReview {
  id: string;
  name: string;
  email: string;
  comment: string;
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  room_comfort_quality: number;
  average: number;
  date_review: string;
  user_id: string;
  tour_id: string;
};

export interface PostReview {
  name: string;
  email: string;
  comment: string;
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  room_comfort_quality: number;
  average: number;
  date_review: string;
  user_id: string;
  tour_id: string;
};