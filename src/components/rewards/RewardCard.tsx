
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reward } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { toast } from "sonner";
import { useState } from "react";

interface RewardCardProps {
  reward: Reward;
  userPoints: number;
}

export function RewardCard({ reward, userPoints }: RewardCardProps) {
  const [isRedeeming, setIsRedeeming] = useState(false);
  const canAfford = userPoints >= reward.pointsCost;
  
  const handleRedeem = () => {
    if (!canAfford) {
      toast.error("Not enough points");
      return;
    }
    
    setIsRedeeming(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success(`Redeemed: ${reward.title}`);
      setIsRedeeming(false);
    }, 1500);
  };
  
  return (
    <Card className="overflow-hidden border-none shadow hover:shadow-md transition-all duration-300 hover-scale">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={reward.image}
          alt={reward.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
          {formatPoints(reward.pointsCost)} points
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{reward.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-xs py-0.5 px-2 bg-muted rounded-full">
            {reward.category}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleRedeem}
          disabled={!canAfford || isRedeeming}
          variant={canAfford ? "default" : "outline"}
          className="w-full"
        >
          {isRedeeming ? "Redeeming..." : canAfford ? "Redeem Reward" : "Not Enough Points"}
        </Button>
      </CardFooter>
    </Card>
  );
}
