
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import { VoucherList } from "@/components/vouchers/VoucherList";
import { VoucherCard } from "@/components/vouchers/VoucherCard";
import { Button } from "@/components/ui/button"; 
import { ArrowLeft, Wallet, History, ArrowRightLeft, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useVouchers } from "@/hooks/use-vouchers";
import { currentUser } from "@/utils/mockData";

const Wallet = () => {
  // Get vouchers from hook
  const { vouchers } = useVouchers();
  
  // Filter vouchers by category
  const cashVouchers = vouchers.filter(v => 
    v.category === 'Shopping' || v.category === 'Food');
  
  const pointsVouchers = vouchers.filter(v => 
    v.category === 'Entertainment' || v.category === 'Travel');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Wallet</h1>
            <p className="text-muted-foreground">
              Manage your cash and points
            </p>
          </div>
        </div>
        
        <Link to="/history">
          <Button variant="outline" size="sm">
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
        </Link>
      </div>
      
      <Tabs defaultValue="cash" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cash">Cash</TabsTrigger>
          <TabsTrigger value="points">Points</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cash" className="space-y-4 mt-4 animate-in fade-in-50">
          <Card className="border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Cash Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-4">
                <AnimatedNumber 
                  value={3850} 
                  prefix="₹" 
                  className="text-4xl font-bold" 
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Available for payments and withdrawals
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <Link to="/withdraw">
                  <Button 
                    variant="outline" 
                    className="w-full h-12 justify-start border border-border bg-muted/40 hover:bg-muted/60 transition-colors"
                  >
                    <Wallet className="mr-2 h-5 w-5" />
                    Withdraw to Bank Account
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow">
            <CardHeader className="pb-2 flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Recommended Vouchers</CardTitle>
              <Link to="/redeem" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </CardHeader>
            <CardContent>
              <VoucherList>
                {cashVouchers.slice(0, 2).map(voucher => (
                  <VoucherCard 
                    key={voucher.id} 
                    voucher={voucher} 
                    userPoints={currentUser.points}
                  />
                ))}
              </VoucherList>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="points" className="space-y-4 mt-4 animate-in fade-in-50">
          <Card className="border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Points Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-4">
                <AnimatedNumber 
                  value={1250} 
                  className="text-4xl font-bold" 
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Available for rewards and discounts
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Card className="border border-border bg-muted/40 hover:bg-muted/60 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-4 h-24">
                    <span className="text-xl mb-2">🎁</span>
                    <p className="font-medium">Redeem</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-border bg-muted/40 hover:bg-muted/60 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-4 h-24">
                    <ArrowRightLeft className="h-6 w-6 mb-2" />
                    <p className="font-medium">Convert</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow">
            <CardHeader className="pb-2 flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Popular Point Vouchers</CardTitle>
              <Link to="/redeem" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </CardHeader>
            <CardContent>
              <VoucherList>
                {pointsVouchers.slice(0, 2).map(voucher => (
                  <VoucherCard 
                    key={voucher.id} 
                    voucher={voucher} 
                    userPoints={currentUser.points}
                  />
                ))}
              </VoucherList>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Wallet;
