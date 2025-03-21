
import { PointsCard } from "@/components/home/PointsCard";
import { QuickActions } from "@/components/home/QuickActions";
import { RecentTransactions } from "@/components/home/RecentTransactions";
import { TopProducts } from "@/components/home/TopProducts"; 
import { WeeklyProgress } from "@/components/home/WeeklyProgress";
import { Leaderboard } from "@/components/home/Leaderboard";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { useState } from "react";
import { ReferralModal } from "@/components/referral/ReferralModal";

const Index = () => {
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openReferralModal = (product = null) => {
    setSelectedProduct(product);
    setIsReferralModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Your Referral Dashboard</h1>
        <p className="text-muted-foreground">
          Track your progress and boost your rewards!
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <PointsCard />
        <div className="flex flex-col justify-between gap-4">
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 p-6 rounded-lg shadow-sm border border-amber-200/50 dark:border-amber-800/30">
            <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-1">Start earning more</h3>
            <p className="text-sm text-amber-700/80 dark:text-amber-300/80 mb-4">Share with friends and earn up to 500 points per referral!</p>
            <Button 
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 border-none"
              onClick={() => openReferralModal()}
            >
              <Share className="mr-2 h-4 w-4" />
              Make a Referral
            </Button>
          </div>
          <QuickActions />
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TopProducts onSelectProduct={(product) => openReferralModal(product)} />
        <WeeklyProgress />
        <Leaderboard />
      </div>

      <RecentTransactions />

      <ReferralModal 
        isOpen={isReferralModalOpen}
        onClose={() => setIsReferralModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
};

export default Index;
