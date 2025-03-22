
import { ReactNode } from 'react';

interface VoucherListProps {
  children: ReactNode;
}

export function VoucherList({ children }: VoucherListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {children}
    </div>
  );
}
