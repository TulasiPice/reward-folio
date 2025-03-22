
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  ArrowLeft, 
  Link as LinkIcon, 
  CircleDollarSign, 
  Clock 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { referrals, referralStats } from '@/utils/mockData';

const ReferralTracking = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/referral');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-amber-400 hover:bg-amber-500';
      case 'Completed':
        return 'bg-emerald-500 hover:bg-emerald-600';
      case 'Rewarded':
        return 'bg-blue-500 hover:bg-blue-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="container max-w-md mx-auto pb-24 pt-6 px-4 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleBack}
          className="h-8 w-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">Referral Tracking</h1>
      </div>

      {/* Stats Display */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="font-semibold text-lg">Your Referral Stats</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center justify-center bg-accent/20 p-3 rounded-lg">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-2">
                <LinkIcon className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-xl font-semibold">{referralStats.referralCount}</div>
              <div className="text-xs text-muted-foreground text-center">Total Referrals</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-accent/20 p-3 rounded-lg">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-2">
                <CircleDollarSign className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-xl font-semibold">₹{referralStats.totalEarned}</div>
              <div className="text-xs text-muted-foreground text-center">Rewards Earned</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-accent/20 p-3 rounded-lg">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-2">
                <Clock className="h-4 w-4 text-amber-500" />
              </div>
              <div className="text-xl font-semibold">₹{referralStats.pendingAmount}</div>
              <div className="text-xs text-muted-foreground text-center">Pending Rewards</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Referral Activity */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Referral Activity</h2>
        <div className="space-y-2">
          {referrals.map((referral) => (
            <div 
              key={referral.id}
              className="flex items-center justify-between p-3 bg-accent/10 rounded-lg"
            >
              <div className="flex flex-col">
                <span className="font-medium">{referral.name}</span>
                <span className="text-xs text-muted-foreground">{referral.date}</span>
              </div>
              <Badge className={`${getStatusColor(referral.status)} text-white`}>
                {referral.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center italic mt-4">
        Tip: More referrals = higher tier + bonus ₹!
      </p>
    </div>
  );
};

export default ReferralTracking;
