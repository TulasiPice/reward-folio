
import { ArrowLeft, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { currentUser } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { VoucherList } from "@/components/vouchers/VoucherList";
import { VoucherCard } from "@/components/vouchers/VoucherCard";
import { useVouchers } from "@/hooks/use-vouchers";

const Redeem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get vouchers from hook
  const { vouchers, isLoading, error } = useVouchers();
  
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
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Redeem Points</h1>
          <p className="text-muted-foreground">
            You have <span className="font-medium text-foreground">{formatPoints(currentUser.points)}</span> points to spend.
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search vouchers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-sm ${
              selectedCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-sm ${
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <VoucherList>
          {filteredVouchers.map(voucher => (
            <VoucherCard 
              key={voucher.id} 
              voucher={voucher} 
              userPoints={currentUser.points} 
            />
          ))}
        </VoucherList>
        
        {filteredVouchers.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex mx-auto items-center justify-center rounded-full bg-muted p-6 mb-4">
              <Ticket className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold">No vouchers found</p>
            <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Redeem;
