
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

export type Referral = {
  id: string;
  name: string;
  date: string;
  status: 'Pending' | 'Completed' | 'Rewarded';
  amount?: number;
};
