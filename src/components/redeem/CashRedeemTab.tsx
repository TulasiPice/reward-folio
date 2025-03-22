
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Receipt, Wallet } from "lucide-react";
import { toast } from "sonner";

interface CashRedeemTabProps {
  userPoints: number;
}

export function CashRedeemTab({ userPoints }: CashRedeemTabProps) {
  const [cashAmount, setCashAmount] = useState<number>(500);

  const handleCashRedeem = () => {
    if (cashAmount > userPoints) {
      toast.error("You don't have enough points");
      return;
    }
    
    toast.success(`Successfully redeemed ₹${cashAmount} to your wallet`);
  };

  return (
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
                disabled={cashAmount > userPoints}
              >
                <Wallet className="w-4 h-4 mr-2" />
                Redeem for Cash
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
