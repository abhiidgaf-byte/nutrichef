import { HealthConditionOption, GoalOption, SubscriptionPlan, Chef, DishComparison, MealPlanDay } from '../types';

export const BANGALORE_NEIGHBORHOODS = [
  'Koramangala',
  'HSR Layout',
  'Indiranagar',
  'Whitefield',
  'JP Nagar',
  'Jayanagar',
  'Bellandur',
  'Sarjapur Road',
  'MGM Road / Central',
  'Malleshwaram'
];

export const HEALTH_CONDITIONS: HealthConditionOption[] = [
  {
    id: 'diabetes',
    name: 'Diabetes Type 2 / Pre-Diabetic',
    badge: 'Low GI Protocol',
    description: 'Strict blood sugar management with complex millets & zero refined sugars.',
    iconName: 'Activity'
  },
  {
    id: 'thyroid',
    name: "Thyroid / Hashimoto's",
    badge: 'Hormone & Metabolism',
    description: 'Selenium-rich ingredients, cruciferous optimization & gluten-conscious cooking.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'pcos',
    name: 'PCOS / PCOD',
    badge: 'Anti-Inflammatory',
    description: 'Inositol support, low glycemic carbohydrates & hormone-balancing herbs.',
    iconName: 'HeartPulse'
  },
  {
    id: 'hypertension',
    name: 'High BP / Hypertension',
    badge: 'DASH & Low Sodium',
    description: 'Controlled Himalayan pink salt, potassium-dense vegetables & garlic infusion.',
    iconName: 'TrendingDown'
  },
  {
    id: 'fatty_liver',
    name: 'Fatty Liver / High Cholesterol',
    badge: 'Lipid Balance',
    description: 'Omega-3 rich cold pressed oils, high fiber & zero vanaspati/trans-fats.',
    iconName: 'Sparkles'
  },
  {
    id: 'none',
    name: 'None / General Fitness',
    badge: 'Longevity & Immunity',
    description: 'Balanced macronutrients, gut health fiber & natural bio-active spices.',
    iconName: 'Award'
  }
];

export const GOALS: GoalOption[] = [
  {
    id: 'weight_loss',
    name: 'Fat Loss & Body Recomp',
    description: 'High volume, nutrient-dense meals with precise caloric deficit controls.',
    iconName: 'Flame'
  },
  {
    id: 'muscle_gain',
    name: 'Lean Muscle & Strength',
    description: 'High protein bioavailability (140g+ daily target) for peak physical recovery.',
    iconName: 'Dumbbell'
  },
  {
    id: 'condition_mgmt',
    name: 'Clinical Condition Care',
    description: 'Stabilize biomarkers, reduce inflammation and support physician guidance.',
    iconName: 'Heart'
  },
  {
    id: 'longevity',
    name: 'Energy, Gut & Longevity',
    description: 'Micronutrient optimization, diverse gut-microbiome fiber & steady vitality.',
    iconName: 'Zap'
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'starter',
    name: 'Fitness Care Plan',
    price: 9999,
    priceDisplay: '₹9,999',
    visitsPerWeek: 12,
    mealsPerVisit: '2 Cook Visits / Day (6 Days / Week)',
    description: 'Designed for fitness enthusiasts & active individuals needing daily fresh customized meals.',
    features: [
      '2 Cook Visits / Day (6 Days / Week)',
      'Fresh Home-Cooked Meals Daily',
      '2 Monthly Health Check-ins with RD',
      'Dedicated Clinical Nutritionist (RD)',
      'Same Certified Chef Every Visit'
    ],
    recommendedFor: 'Fitness Enthusiasts & Active Lifestyle'
  },
  {
    id: 'health_condition',
    name: 'Health Condition Care',
    price: 15999,
    priceDisplay: '₹15,999',
    visitsPerWeek: 14,
    mealsPerVisit: '2 Cook Visits / Day (7 Days / Week)',
    popular: true,
    description: 'Our signature clinical subscription: 2 fresh cook visits per day for 7 days a week with 4 monthly health check-ins.',
    features: [
      '2 Cook Visits / Day (7 Days / Week)',
      'Fresh Home-Cooked Meals Daily',
      '4 Monthly Health Check-ins with Registered Dietitian',
      'Dedicated Clinical Nutritionist (RD)',
      'Same Certified Chef Every Visit',
      'Bi-weekly Biomarker & Progress Review'
    ],
    recommendedFor: 'Diabetes, PCOS, Thyroid & Complete Daily Care'
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'chef_arjun',
    name: 'Chef Arjun Sharma',
    title: 'Senior Clinical Culinary Specialist',
    photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewCount: 64,
    experienceYears: 8,
    specializations: [
      'Diabetic Cooking Certified',
      'Low-GI Millet Specialist',
      'Hygiene Standard 5/5'
    ],
    neighborhoods: ['Koramangala', 'HSR Layout', 'Indiranagar', 'JP Nagar'],
    bio: 'Former sous-chef at a wellness retreat in Coorg, Arjun specializes in turning clinical therapeutic restrictions into aromatic, soul-satisfying South & North Indian dishes.',
    favoriteDishToCook: 'Slow-simmered Foxtail Millet Khichdi with Cold-Pressed Sesame Tempering'
  },
  {
    id: 'chef_lakshmi',
    name: 'Chef Lakshmi Rao',
    title: 'Hormonal & Gut Health Specialist',
    photo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=600',
    rating: 4.95,
    reviewCount: 82,
    experienceYears: 10,
    specializations: [
      'PCOS & Thyroid Certified',
      'Gluten-Free Roti Expert',
      'Anti-Inflammatory Cuisine'
    ],
    neighborhoods: ['Indiranagar', 'Whitefield', 'Bellandur', 'Sarjapur Road'],
    bio: 'Lakshmi has trained under leading functional medicine doctors to master cooking techniques that preserve bio-active nutrients in traditional Indian curries and rotis.',
    favoriteDishToCook: 'Organic Palak Paneer with Bajra Flaxseed Rotis'
  }
];

export const DISH_COMPARISON: DishComparison = {
  title: "Same Dish, Tailored For You",
  dishName: "Paneer Makhani & Rice Bowl",
  image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
  standard: {
    calories: 890,
    carbs: 98,
    glycemicIndex: "High GI (82)",
    ingredients: [
      "Refined White Basmati Rice",
      "Heavy Commercial Cream & Butter",
      "Processed Sugar Granules",
      "Refined Sunflower Oil"
    ],
    healthScore: 4.2
  },
  nutriChef: {
    calories: 520,
    carbs: 42,
    glycemicIndex: "Low GI (38)",
    ingredients: [
      "A2 Organic Paneer & Steamed Tofu Blend",
      "Soaked Cashew & Pumpkin Seed Puree",
      "Foxtail Millet & Brown Rice Medley",
      "Cold-Pressed Mustard Oil & Ceylon Cinnamon"
    ],
    healthScore: 9.8,
    clinicalNotes: "Reduces blood sugar spike by 64% while supplying 36g of bioavailable protein."
  }
};

export const SAMPLE_WEEKLY_MEALS: MealPlanDay[] = [
  {
    id: 'mon',
    dayName: 'Monday',
    dateStr: 'Fresh Cook Visit • 8:00 AM',
    lunch: {
      title: 'Therapeutic Palak Paneer & Jowar Rotis',
      description: 'Organic spinach cooked with garlic, turmeric, A2 paneer and two low-GI sorghum rotis.',
      calories: 510,
      protein: 34,
      carbs: 38,
      fat: 18,
      clinicalNote: 'Rich in magnesium & iron. Zero glycemic spike.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600'
    },
    dinner: {
      title: 'Methi Dal Makhani & Brown Rice Pulao',
      description: 'Slow-cooked black lentils simmered with fenugreek leaves and cold-pressed mustard tempering.',
      calories: 480,
      protein: 28,
      carbs: 45,
      fat: 14,
      clinicalNote: 'Fenugreek leaves improve insulin sensitivity.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600'
    }
  },
  {
    id: 'wed',
    dayName: 'Wednesday',
    dateStr: 'Fresh Cook Visit • 8:00 AM',
    lunch: {
      title: 'Roasted Herb Tofu/Chicken & Quinoa Bowl',
      description: 'Marinated in Kashmiri chili, ginger & lemon zest, served over steamed quinoa and roasted zucchini.',
      calories: 540,
      protein: 42,
      carbs: 35,
      fat: 16,
      clinicalNote: 'High protein synthesis for muscle recovery.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
    },
    dinner: {
      title: 'Lauki Chana Dal Curry & Multigrain Phulkas',
      description: 'Bottle gourd cooked with split Bengal gram and fresh coriander, paired with flaxseed-infused phulkas.',
      calories: 440,
      protein: 24,
      carbs: 48,
      fat: 10,
      clinicalNote: 'Gentle on digestions, reduces BP & bloating.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600'
    }
  },
  {
    id: 'sat',
    dayName: 'Saturday',
    dateStr: 'Fresh Cook Visit • 8:00 AM',
    lunch: {
      title: 'Kerala Style Fish/Mushroom Curry & Red Matta Rice',
      description: 'Coconut milk gravy infused with kokum & curry leaves, served with mineral-dense Matta rice.',
      calories: 560,
      protein: 38,
      carbs: 42,
      fat: 20,
      clinicalNote: 'Omega-3 fatty acids for cardiovascular & brain care.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600'
    },
    dinner: {
      title: 'Moong Dal & Vegetable Cheela with Mint Chutney',
      description: 'Savoury sprouted moong pancakes stuffed with grated paneer and herbs, served with homemade mint dip.',
      calories: 420,
      protein: 26,
      carbs: 36,
      fat: 12,
      clinicalNote: 'Light evening dinner for restful sleep & gut repair.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600'
    }
  }
];
