
import { Transaction } from '@/types/data-types';

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
