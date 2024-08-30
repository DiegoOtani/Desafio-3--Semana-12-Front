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