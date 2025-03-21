
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

// Current user
export const currentUser: User = {
  id: '1',
  name: 'Alex Thompson',
  email: 'alex@example.com',
  avatar: 'https://i.pravatar.cc/150?img=68',
  points: 3850
};

// Contacts/Users
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

// Transactions
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

// Rewards
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

// Stats
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
