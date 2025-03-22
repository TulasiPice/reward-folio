
import { useState } from "react";
import { Voucher } from "@/types/voucher";
import { VoucherList } from "@/components/vouchers/VoucherList";
import { VoucherCard } from "@/components/vouchers/VoucherCard";
import { SearchVouchers } from "./SearchVouchers";
import { CategoryFilter } from "./CategoryFilter";
import { EmptyVouchers } from "./EmptyVouchers";

interface VouchersTabProps {
  vouchers: Voucher[];
  userPoints: number;
}

export function VouchersTab({ vouchers, userPoints }: VouchersTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(vouchers.map(voucher => voucher.category)));
  
  // Filter vouchers based on search and category
  const filteredVouchers = vouchers.filter(voucher => {
    const matchesSearch = voucher.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         voucher.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? voucher.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4">
      <SearchVouchers searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      
      <VoucherList>
        {filteredVouchers.map(voucher => (
          <VoucherCard 
            key={voucher.id} 
            voucher={voucher} 
            userPoints={userPoints} 
          />
        ))}
      </VoucherList>
      
      {filteredVouchers.length === 0 && <EmptyVouchers />}
    </div>
  );
}
