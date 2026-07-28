export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPremium?: boolean;
  buttonText: string;
}

export interface Testimonial {
  role: string;
  content: string;
  author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
