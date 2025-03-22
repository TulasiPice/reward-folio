
import { Referral } from '@/types/data-types';

export const referrals: Referral[] = [
  {
    id: 'r1',
    name: 'Priya Sharma',
    date: '2 days ago',
    status: 'Rewarded',
    amount: 100
  },
  {
    id: 'r2',
    name: 'Vikram Patel',
    date: '3 days ago',
    status: 'Completed',
    amount: 50
  },
  {
    id: 'r3',
    name: 'Neha Gupta',
    date: '5 days ago',
    status: 'Pending'
  },
  {
    id: 'r4',
    name: 'Rajesh Kumar',
    date: '1 week ago',
    status: 'Rewarded',
    amount: 100
  },
  {
    id: 'r5',
    name: 'Ananya Desai',
    date: '1 week ago',
    status: 'Completed',
    amount: 50
  },
  {
    id: 'r6',
    name: 'Sanjay Mehra',
    date: '2 weeks ago',
    status: 'Rewarded',
    amount: 100
  }
];

export const referralStats = {
  referralCount: 12,
  totalEarned: 450,
  pendingAmount: 150
};
