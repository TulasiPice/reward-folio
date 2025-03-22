export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  points: number;
};

export type Transaction = {
  id: string;
  type: 'received' | 'sent' | 'reward';
  amount: number;
  date: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  description?: string;
};

export type Reward = {
  id: string;
  title: string;
  description: string;
  image: string;
  pointsCost: number;
  available: boolean;
  category: string;
};

import { Voucher } from '@/types/voucher';

export const currentUser: User = {
  id: '1',
  name: 'Alex Thompson',
  email: 'alex@example.com',
  avatar: 'https://i.pravatar.cc/150?img=68',
  points: 3850
};

export const users: User[] = [
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    points: 1240
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael@example.com',
    avatar: 'https://i.pravatar.cc/150?img=11',
    points: 2100
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    avatar: 'https://i.pravatar.cc/150?img=9',
    points: 980
  },
  {
    id: '5',
    name: 'James Anderson',
    email: 'james@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    points: 1560
  },
  {
    id: '6',
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    avatar: 'https://i.pravatar.cc/150?img=25',
    points: 3200
  }
];

export const transactions: Transaction[] = [
  {
    id: 't1',
    type: 'received',
    amount: 250,
    date: '2023-10-05T14:30:00',
    user: {
      id: '2',
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    description: 'Great presentation'
  },
  {
    id: 't2',
    type: 'sent',
    amount: 100,
    date: '2023-10-03T09:15:00',
    user: {
      id: '3',
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    description: 'Thanks for your help'
  },
  {
    id: 't3',
    type: 'reward',
    amount: -500,
    date: '2023-10-01T16:45:00',
    user: {
      id: '1',
      name: 'Alex Thompson',
      avatar: 'https://i.pravatar.cc/150?img=68'
    },
    description: 'Coffee shop gift card'
  },
  {
    id: 't4',
    type: 'received',
    amount: 300,
    date: '2023-09-28T11:20:00',
    user: {
      id: '5',
      name: 'James Anderson',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    description: 'Project completion bonus'
  },
  {
    id: 't5',
    type: 'sent',
    amount: 150,
    date: '2023-09-25T15:30:00',
    user: {
      id: '4',
      name: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    description: 'Lunch treat'
  },
  {
    id: 't6',
    type: 'received',
    amount: 200,
    date: '2023-09-22T10:15:00',
    user: {
      id: '6',
      name: 'Olivia Martinez',
      avatar: 'https://i.pravatar.cc/150?img=25'
    },
    description: 'Thanks for your support'
  },
  {
    id: 't7',
    type: 'reward',
    amount: -750,
    date: '2023-09-18T14:00:00',
    user: {
      id: '1',
      name: 'Alex Thompson',
      avatar: 'https://i.pravatar.cc/150?img=68'
    },
    description: 'Movie tickets'
  }
];

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

export const vouchers: Voucher[] = [
  {
    id: 'v1',
    title: '20% Off Starbucks',
    description: 'Get 20% off your next purchase at any Starbucks location.',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 500,
    category: 'Food & Drinks',
    available: true,
    featured: true,
    expiresAt: '2024-12-31'
  },
  {
    id: 'v2',
    title: 'Amazon ₹1000 Gift Card',
    description: 'Redeem for a ₹1000 Amazon gift card to use on your next purchase.',
    image: 'https://images.unsplash.com/photo-1612599316791-451087c7fe15?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 2500,
    category: 'Shopping',
    available: true,
    expiresAt: '2025-01-15'
  },
  {
    id: 'v3',
    title: 'Netflix 1 Month Premium',
    description: 'One month of Netflix Premium subscription with access to all content in 4K quality.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 1200,
    category: 'Entertainment',
    available: true
  },
  {
    id: 'v4',
    title: 'Spa Day Pass',
    description: 'Full day access to premium spa facilities including sauna, pool, and one complimentary massage.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 3000,
    category: 'Wellness',
    available: true,
    featured: true
  },
  {
    id: 'v5',
    title: 'Movie Ticket + Popcorn',
    description: 'One standard movie ticket with a medium popcorn and drink at PVR Cinemas.',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 800,
    category: 'Entertainment',
    available: true
  },
  {
    id: 'v6',
    title: 'Gym Monthly Pass',
    description: 'One month unlimited access to premium fitness center with all facilities and classes.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 1800,
    category: 'Fitness',
    available: true
  },
  {
    id: 'v7',
    title: 'Food Delivery ₹300 Off',
    description: 'Get ₹300 off on your next order from Swiggy or Zomato.',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 700,
    category: 'Food & Drinks',
    available: true,
    expiresAt: '2024-10-15'
  },
  {
    id: 'v8',
    title: 'Designer Brand Discount',
    description: '15% off your next purchase at select luxury brand stores.',
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=400&h=250&auto=format&fit=crop',
    pointsCost: 2000,
    category: 'Fashion',
    available: true
  }
];

export const pointsHistory = [
  { month: 'Jan', points: 1200 },
  { month: 'Feb', points: 1800 },
  { month: 'Mar', points: 2200 },
  { month: 'Apr', points: 1900 },
  { month: 'May', points: 2400 },
  { month: 'Jun', points: 2100 },
  { month: 'Jul', points: 2600 },
  { month: 'Aug', points: 3200 },
  { month: 'Sep', points: 3500 },
  { month: 'Oct', points: 3850 }
];
