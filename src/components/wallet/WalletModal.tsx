import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import { currentUser, transactions } from "@/utils/mockData";
import { formatPoints, formatRelativeTime, getTransactionColor, formatTransactionAmount } from "@/utils/formatters";
import { Wallet, Coins, SendHorizontal, ArrowUp, ArrowDown, Gift, ArrowLeft, Ticket, Download, History, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { TransactionsList } from "@/components/wallet/TransactionsList";
import { useToast } from "@/hooks/use-toast";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [activeTab, setActiveTab] = useState("cash");
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
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

  const handleRedeem = () => {
    toast({
      title: "Points Redeemed!",
      description: "Your points have been successfully redeemed",
    });
  };

  const vouchers = [
    {
      id: 'v1',
      title: 'Zomato',
      logo: "/lovable-uploads/04b7efc9-a010-4d7e-a4c2-d56be353a63d.png",
      value: '₹15',
      expiryDate: '2023-12-31',
      isNew: true,
      color: 'bg-red-50'
    },
    {
      id: 'v2',
      title: 'Swiggy',
      logo: "/lovable-uploads/5849cf2d-e0a1-4fd2-b223-6ae840102e72.png",
      value: '₹25',
      expiryDate: '2023-11-30',
      isNew: false,
      color: 'bg-orange-50'
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
            <div className="flex items-center mb-2 justify-between">
              <div className="flex items-center">
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
              <Link to="/history" onClick={onClose}>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <History className="h-5 w-5" />
                </Button>
              </Link>
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
                <p className="text-sm text-muted-foreground mb-1">Total Cash</p>
                <div className="text-3xl font-bold">
                  <AnimatedNumber 
                    value={cashData.total} 
                    prefix="₹ "
                    duration={1500}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <ArrowDown className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Earned</p>
                    <p className="font-semibold">₹ {formatPoints(cashData.earned)}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <ArrowUp className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Spent</p>
                    <p className="font-semibold">₹ {formatPoints(cashData.spent)}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none bg-muted/50">
                  <CardContent className="p-3 text-center">
                    <Gift className="h-4 w-4 text-amber-500 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Bonus</p>
                    <p className="font-semibold">₹ {formatPoints(cashData.bonus)}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-4">
                <Link to="/withdraw" onClick={onClose} className="w-full">
                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Withdraw Cash
                  </Button>
                </Link>
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
                        <div className="flex items-center gap-3">
                          {voucher.logo ? (
                            <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0">
                              <img 
                                src={voucher.logo} 
                                alt={voucher.title} 
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ) : null}
                          <div>
                            <h4 className="font-medium">{voucher.title}</h4>
                            <p className="text-sm text-muted-foreground">Expires: {voucher.expiryDate}</p>
                          </div>
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
                <p className="text-sm text-muted-foreground mb-1">Total Points</p>
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
                        <div className="flex items-center gap-3">
                          {voucher.logo ? (
                            <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0">
                              <img 
                                src={voucher.logo} 
                                alt={voucher.title} 
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ) : null}
                          <div>
                            <h4 className="font-medium">{voucher.title}</h4>
                            <p className="text-sm text-muted-foreground">Expires: {voucher.expiryDate}</p>
                          </div>
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
              
              <div className="mt-auto grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="w-full text-orange-500 border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                  onClick={handleRedeem}
                >
                  <Award className="h-4 w-4 mr-2" />
                  Redeemed
                </Button>
                
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
