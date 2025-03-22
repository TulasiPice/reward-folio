
import { Voucher } from '@/types/voucher';

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
