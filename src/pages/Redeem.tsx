
import { ArrowLeft, Ticket, Wallet, Receipt, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { currentUser } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { VoucherList } from "@/components/vouchers/VoucherList";
import { VoucherCard } from "@/components/vouchers/VoucherCard";
import { useVouchers } from "@/hooks/use-vouchers";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Redeem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [redeemType, setRedeemType] = useState<"vouchers" | "cash">("vouchers");
  const [cashAmount, setCashAmount] = useState<number>(500);
  
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

  const handleCashRedeem = () => {
    if (cashAmount > currentUser.points) {
      toast.error("You don't have enough points");
      return;
    }
    
    toast.success(`Successfully redeemed ₹${cashAmount} to your wallet`);
  };
  
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
      
      <Tabs defaultValue="vouchers" value={redeemType} onValueChange={(value) => setRedeemType(value as "vouchers" | "cash")} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="vouchers" className="flex items-center gap-2">
            <Ticket className="h-4 w-4" />
            <span>Vouchers</span>
          </TabsTrigger>
          <TabsTrigger value="cash" className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span>Cash</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      {redeemType === "vouchers" ? (
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
      ) : (
        <div className="space-y-4">
          <Card className="border shadow-sm">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-medium">Convert Points to Cash</h3>
                  <p className="text-sm text-muted-foreground">
                    Redeem your points for cash that will be added to your wallet
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Select Amount</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[500, 1000, 2000].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setCashAmount(amount)}
                          className={`rounded-md border py-2 text-center ${
                            cashAmount === amount
                              ? 'bg-primary/10 border-primary text-primary font-medium'
                              : 'bg-muted/40 hover:bg-muted/60 transition-colors'
                          }`}
                        >
                          ₹{amount}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Points Required</span>
                      <span className="font-medium">{cashAmount} points</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cash Value</span>
                      <span className="font-medium">₹{cashAmount}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-muted rounded-lg">
                    <Receipt className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Cash will be added to your wallet immediately after redemption
                    </span>
                  </div>
                  
                  <Button 
                    onClick={handleCashRedeem} 
                    className="w-full"
                    disabled={cashAmount > currentUser.points}
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Redeem for Cash
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Redeem;
