
export interface Voucher {
  id: string;
  title: string;
  description: string;
  image: string;
  pointsCost: number;
  category: string;
  featured?: boolean;
  expiresAt?: string;
  available: boolean;
}
