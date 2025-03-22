
import { Reward } from '@/types/data-types';

export const rewards: Reward[] = [
  {
    id: 'r1',
    title: 'Coffee Break',
    description: '$15 Gift Card for your favorite coffee shop',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 500,
    available: true,
    category: 'Food & Drink'
  },
  {
    id: 'r2',
    title: 'Movie Night',
    description: 'Two tickets to any movie of your choice',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 750,
    available: true,
    category: 'Entertainment'
  },
  {
    id: 'r3',
    title: 'Lunch Voucher',
    description: '$25 voucher for lunch at any restaurant',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 800,
    available: true,
    category: 'Food & Drink'
  },
  {
    id: 'r4',
    title: 'Wellness Day',
    description: 'Full day pass to premium spa',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 2000,
    available: true,
    category: 'Wellness'
  },
  {
    id: 'r5',
    title: 'Shopping Spree',
    description: '$50 gift card for your favorite store',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 1500,
    available: true,
    category: 'Shopping'
  },
  {
    id: 'r6',
    title: 'Dinner for Two',
    description: 'Fine dining experience at a top restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 2500,
    available: true,
    category: 'Food & Drink'
  }
];
