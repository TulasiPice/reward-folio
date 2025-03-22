
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Share } from 'lucide-react';

interface ReferralStatsProps {
  referrals: number;
  totalEarned: string;
}

export const ReferralStats = ({ referrals, totalEarned }: ReferralStatsProps) => {
  return (
    <div className="flex gap-4">
      <Card className="flex-1">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="p-2 bg-primary/10 rounded-full mb-2">
            <Share className="h-5 w-5 text-primary" />
          </div>
          <div className="text-2xl font-bold">{referrals}</div>
          <div className="text-xs text-muted-foreground">Total Referrals</div>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="p-2 bg-emerald-500/10 rounded-full mb-2">
            <span className="h-5 w-5 text-emerald-500 font-bold flex items-center justify-center text-lg">₹</span>
          </div>
          <div className="text-2xl font-bold">{totalEarned}</div>
          <div className="text-xs text-muted-foreground">Total Earned</div>
        </CardContent>
      </Card>
    </div>
  );
};
