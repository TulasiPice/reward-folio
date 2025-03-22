
import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { RewardsMilestoneTracker } from "@/components/rewards/RewardsMilestoneTracker";
import { ExclusiveBenefits } from "@/components/rewards/ExclusiveBenefits";
import { TierBadge } from "@/components/shared/TierBadge";
import { InviteEarnCard } from "@/components/referral/InviteEarnCard";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/utils/mockData";
import { ReferralStats } from "@/components/referral/ReferralStats";
import { referralStats } from "@/utils/mockData";
import { Wallet, Gift, User, ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RecentTransactions } from "@/components/home/RecentTransactions";
import { WeeklyProgress } from "@/components/home/WeeklyProgress";
import { TopProducts } from "@/components/home/TopProducts";
import { Leaderboard } from "@/components/home/Leaderboard";

const Index = () => {
  const navigate = useNavigate();

  // Get first name for personalized greeting
  const firstName = currentUser.name.split(" ")[0];
  
  // For demo purposes, assume the user is Gold tier
  const userTier = "Gold" as const;

  // Handle navigation to wallet with specific tab
  const navigateToWallet = (tab: 'cash' | 'points') => {
    navigate(`/wallet?tab=${tab}`);
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Enhanced Welcome Card with Progress */}
      <div className="bg-gradient-to-r from-[#0A1B78] to-[#1E3A8A] text-white p-6 -mx-4 -mt-4 rounded-b-3xl shadow-md">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-2xl font-bold">Welcome, {firstName}</h1>
          
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-[#0A1B78]">{firstName.charAt(0)}</span>
          </div>
          
          <TierBadge 
            tier={userTier} 
            className="mt-2 px-4 py-1"
          />
          
          {/* Progress Milestone Tracker integrated into welcome card */}
          <div className="w-full mt-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <h3 className="text-sm font-medium text-white/90 mb-2">Your Progress</h3>
            <RewardsMilestoneTracker 
              milestones={[
                { label: "Member", value: "₹2,000", achieved: true },
                { label: "Gold", value: "₹5,000", achieved: true },
                { label: "Platinum", value: "₹10,000", achieved: false }
              ]}
              currentValue="₹7,500"
            />
            <p className="text-xs text-white/70 mt-2">
              You're ₹2,500 away from unlocking Platinum perks 🎁
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <section className="grid grid-cols-2 gap-4">
        <Card 
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 shadow-sm hover:shadow-md transition-all cursor-pointer"
          onClick={() => navigateToWallet('cash')}
        >
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                  <Wallet size={18} />
                </div>
                <span className="font-medium">Cash</span>
              </div>
              <p className="text-2xl font-bold">₹{currentUser.points.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card 
          className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 shadow-sm hover:shadow-md transition-all cursor-pointer"
          onClick={() => navigateToWallet('points')}
        >
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-300">
                  <Gift size={18} />
                </div>
                <span className="font-medium">Points</span>
              </div>
              <p className="text-2xl font-bold">1,250</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Referrals Section - Highlighted with a distinguished design */}
      <section className="mt-6 rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-3">
          <h2 className="text-lg font-semibold text-white flex items-center">
            <Users size={20} className="mr-2" />
            Your Referral Program
          </h2>
        </div>
        
        <div className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-slate-900/40 p-4 border border-purple-100 dark:border-purple-900/30 rounded-b-xl">
          {/* Referral Stats */}
          <ReferralStats 
            referrals={referralStats.referralCount} 
            totalEarned={`₹${referralStats.totalEarned}`}
          />
          
          {/* Invite Card */}
          <div className="mt-4">
            <InviteEarnCard />
          </div>
          
          {/* View Details Link */}
          <div className="mt-3 text-right">
            <Button 
              variant="link" 
              className="p-0 h-auto flex items-center text-sm ml-auto text-indigo-600 dark:text-indigo-400"
              onClick={() => navigate('/referral/tracking')}
            >
              View all referrals <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <RecentTransactions />
      
      {/* Weekly Progress & Leaderboard - Desktop Layout */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-4 mt-6">
        <WeeklyProgress />
        <Leaderboard />
      </div>
      
      {/* Weekly Progress & Leaderboard - Mobile Layout */}
      <div className="sm:hidden space-y-6 mt-6">
        <WeeklyProgress />
        <Leaderboard />
      </div>

      {/* Top Products To Refer */}
      <TopProducts />

      {/* Exclusive Benefits Section */}
      <ExclusiveBenefits />
    </div>
  );
};

export default Index;
