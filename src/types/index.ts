export type ScreenType = 
  | 'overview' 
  | 'accommodations' 
  | 'experiences-and-amenities' 
  | 'dining' 
  | 'wayanad-sanctuary' 
  | 'contact-and-location';

export interface SuiteItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  occupancy: string;
  bedType: string;
  view: string;
  sizeSqFt: number;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  keyFeatures: string[];
  amenities: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  timeSlot: string;
  description: string;
  longDescription: string;
  icon: string;
  highlight: string;
  price?: string;
  image?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Breakfast' | 'Mains' | 'Beverages' | 'Desserts';
  price: number;
  description: string;
  dietary: 'Veg' | 'Non-Veg' | 'Vegan';
  isSignature?: boolean;
}

export interface AttractionItem {
  id: string;
  name: string;
  driveTime: string;
  distanceKm: number;
  category: string;
  description: string;
  icon: string;
  highlights: string[];
  bestTimeToVisit: string;
}

export interface GuestReview {
  id: string;
  guestName: string;
  location: string;
  suiteStayed: string;
  rating: number;
  quote: string;
  review: string;
  date: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: string;
  suiteId: string;
  adults: number;
  children: number;
  addons: {
    ayurveda: boolean;
    candlelightDinner: boolean;
    guidedTrek: boolean;
    airportTransfer: boolean;
  };
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
}
