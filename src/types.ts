export type FlowStep = 
  | 'landing' 
  | 'intake_form' 
  | 'analysis' 
  | 'blueprint_result' 
  | 'subscription_select' 
  | 'cook_schedule' 
  | 'celebration' 
  | 'dashboard';

export interface UserProfile {
  name: string;
  age: number;
  neighborhood: string;
  phone: string;
  healthConditions: string[];
  goals: string[];
  dietType: 'Veg' | 'Non-Veg' | 'Eggetarian' | 'Vegan';
  allergies: string[];
  cuisinePreference: string;
  spiceLevel: 'Mild' | 'Medium' | 'Authentic Indian';
}

export interface HealthConditionOption {
  id: string;
  name: string;
  badge: string;
  description: string;
  iconName: string;
}

export interface GoalOption {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface MealPlanDay {
  id: string;
  dayName: string;
  dateStr: string;
  lunch: {
    title: string;
    description: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    clinicalNote: string;
    image: string;
  };
  dinner: {
    title: string;
    description: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    clinicalNote: string;
    image: string;
  };
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  visitsPerWeek: number;
  mealsPerVisit: string;
  popular?: boolean;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface Chef {
  id: string;
  name: string;
  title: string;
  photo: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  specializations: string[];
  neighborhoods: string[];
  bio: string;
  favoriteDishToCook: string;
}

export interface DishComparison {
  title: string;
  dishName: string;
  image: string;
  standard: {
    calories: number;
    carbs: number;
    glycemicIndex: string;
    ingredients: string[];
    healthScore: number;
  };
  nutriChef: {
    calories: number;
    carbs: number;
    glycemicIndex: string;
    ingredients: string[];
    healthScore: number;
    clinicalNotes: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
