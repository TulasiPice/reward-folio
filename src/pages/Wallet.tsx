
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import { TransactionsList } from "@/components/wallet/TransactionsList";
import { transactions } from "@/utils/mockData";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Wallet = () => {
  // Filter transactions by type
  const cashTransactions = transactions.filter(t => 
    t.type === 'sent' || t.type === 'received');
  
  const pointsTransactions = transactions.filter(t => 
    t.type === 'reward');
  
  return (
    <div className="space-y-6">
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
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Card className="border border-border bg-muted/40 hover:bg-muted/60 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-4 h-24">
                    <span className="text-xl mb-2">💸</span>
                    <p className="font-medium">Withdraw</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-border bg-muted/40 hover:bg-muted/60 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-4 h-24">
                    <span className="text-xl mb-2">↗️</span>
                    <p className="font-medium">Send</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Recent Cash Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionsList transactions={cashTransactions} />
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
                    <span className="text-xl mb-2">🔄</span>
                    <p className="font-medium">Convert</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Recent Points Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionsList transactions={pointsTransactions} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Wallet;
