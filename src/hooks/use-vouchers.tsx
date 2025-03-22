
import { useState, useEffect } from 'react';
import { Voucher } from '@/types/voucher';
import { vouchers as mockVouchers } from '@/utils/mockData';

export function useVouchers() {
  const [vouchers, setVouchers] = useState<Voucher[]>(mockVouchers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // In a real app, this would fetch from an API
  useEffect(() => {
    setVouchers(mockVouchers);
  }, []);

  return {
    vouchers,
    isLoading,
    error
  };
}
