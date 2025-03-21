
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import { currentUser } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { Wallet, Coins, SendHorizontal, ArrowUp, ArrowDown, Gift, ArrowLeft, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [activeTab, setActiveTab] = useState("cash");
  const isMobile = useIsMobile();
  
  const cashData = {
    total: currentUser.points,
    earned: 4250,
    spent: 1200,
    bonus: 800
  };
  
  const pointsData = {
    total: 1250,
    earned: 950,
    spent: 300,
    bonus: 600
  };

  const vouchers = [
    {
      id: 'v1',
      title: 'Coffee Break',
      value: '$15',
      expiryDate: '2023-12-31',
      isNew: true,
      color: 'bg-amber-100'
    },
    {
      id: 'v2',
      title: 'Lunch Voucher',
      value: '$25',
      expiryDate: '2023-11-30',
      isNew: false,
      color: 'bg-emerald-100'
    },
    {
      id: 'v3',
      title: 'Movie Tickets',
      value: 'Two tickets',
      expiryDate: '2023-10-15',
      isNew: false,
      color: 'bg-blue-100'
    }
  ];
  
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="p-0 h-[100dvh] sm:max-w-full">
        <div className="flex flex-col h-full overflow-hidden">
          <div className="bg-white text-black shadow-sm p-6">
            <div className="flex items-center mb-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-black mr-2 -ml-3" 
                onClick={onClose}
              >
                <ArrowLeft />
              </Button>
              <h2 className="text-xl font-semibold">Your Wallet</h2>
            </div>
          </div>
          
          <Tabs
            defaultValue="cash"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full flex-1 flex flex-col"
          >
            <div className="px-6 pt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cash" className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  Cash
                </TabsTrigger>
                <TabsTrigger value="points" className="flex items-center gap-2">
                  <Coins className="h-4 w-4" />
                  Points
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="cash" className="p-6 pt-4 space-y-6 flex-1 overflow-auto">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
                <div className="text-3xl font-bold">
                  <AnimatedNumber 
                    value={cashData.total} 
                    prefix={<img src="/lovable-uploads/58c3d019-b55e-4248-a5fa-60c07763399c.png" alt="Wallet" className="inline-block h-8 w-8 mr-1" />}
                    duration={1500}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <ArrowDown className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Earned</p>
                    <p className="font-semibold">{formatPoints(cashData.earned)}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <ArrowUp className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Spent</p>
                    <p className="font-semibold">{formatPoints(cashData.spent)}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <Gift className="h-4 w-4 text-amber-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Bonus</p>
                    <p className="font-semibold">{formatPoints(cashData.bonus)}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Ticket className="h-4 w-4" />
                  Your Vouchers
                </h3>
                <div className="space-y-3">
                  {vouchers.map((voucher) => (
                    <Card key={voucher.id} className={`${voucher.color} border-none shadow-sm overflow-hidden`}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{voucher.title}</h4>
                          <p className="text-sm text-muted-foreground">Expires: {voucher.expiryDate}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-lg">{voucher.value}</span>
                          {voucher.isNew && (
                            <span className="block text-xs bg-primary text-white rounded-full px-2 py-0.5 mt-1">New</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="points" className="p-6 pt-4 space-y-6 flex-1 overflow-auto">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Points Balance</p>
                <div className="text-3xl font-bold">
                  <AnimatedNumber 
                    value={pointsData.total} 
                    duration={1500}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <ArrowDown className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Earned</p>
                    <p className="font-semibold">{formatPoints(pointsData.earned)}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <ArrowUp className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Spent</p>
                    <p className="font-semibold">{formatPoints(pointsData.spent)}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <Gift className="h-4 w-4 text-amber-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Bonus</p>
                    <p className="font-semibold">{formatPoints(pointsData.bonus)}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Ticket className="h-4 w-4" />
                  Your Vouchers
                </h3>
                <div className="space-y-3">
                  {vouchers.map((voucher) => (
                    <Card key={voucher.id} className={`${voucher.color} border-none shadow-sm overflow-hidden`}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{voucher.title}</h4>
                          <p className="text-sm text-muted-foreground">Expires: {voucher.expiryDate}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-lg">{voucher.value}</span>
                          {voucher.isNew && (
                            <span className="block text-xs bg-primary text-white rounded-full px-2 py-0.5 mt-1">New</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <Link to="/send" onClick={onClose} className="w-full">
                  <Button variant="outline" className="w-full">
                    <SendHorizontal className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
