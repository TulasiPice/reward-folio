
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { RewardsMilestoneTracker } from "@/components/rewards/RewardsMilestoneTracker";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ExclusiveBenefits } from "@/components/rewards/ExclusiveBenefits";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Award, Gift, PiggyBank, Share } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isPointsSheetOpen, setIsPointsSheetOpen] = useState(false);
  
  return (
    <div className="space-y-6">
      {/* User Profile Section */}
      <section className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Welcome back, Alex 👋</h2>
        <div className="flex items-center gap-4">
          <UserAvatar 
            src="/lovable-uploads/58c3d019-b55e-4248-a5fa-60c07763399c.png" 
            name="Alex Thompson" 
            size="lg"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Alex Thompson</h3>
            <p className="text-sm text-muted-foreground">Platinum Member since Dec 2024</p>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            ✨
          </button>
        </div>
      </section>

      {/* Progress Section */}
      <section className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
        <RewardsMilestoneTracker 
          milestones={[
            { label: "Member", value: "₹2,000", achieved: true },
            { label: "Gold", value: "₹5,000", achieved: true },
            { label: "Platinum", value: "₹10,000", achieved: false }
          ]}
          currentValue="₹7,500"
        />
        <p className="text-sm text-muted-foreground mt-3">
          You're ₹2,500 away from unlocking Platinum perks 🎁
        </p>
      </section>

      {/* Cards Group */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border-none shadow">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl">
              💵
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Cash</p>
              <p className="text-xl font-bold">₹3,850</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border-none shadow">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-xl">
              🎯
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Points</p>
              <p className="text-xl font-bold">1,250</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Redeem Button */}
      <Button 
        onClick={() => setIsPointsSheetOpen(true)}
        className="w-full py-6 text-base"
      >
        Redeem Points
      </Button>

      {/* Benefits Section */}
      <ExclusiveBenefits />
      
      {/* Redeem Points Sheet */}
      <Sheet open={isPointsSheetOpen} onOpenChange={setIsPointsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Redeem Your Points</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <Link to="/redeem" onClick={() => setIsPointsSheetOpen(false)}>
              <FeatureCard 
                icon={<Gift className="h-5 w-5" />}
                emoji="🎁"
                title="Get Vouchers"
                description="Exchange coins for brand discounts"
              />
            </Link>
            
            <Link to="/withdraw" onClick={() => setIsPointsSheetOpen(false)}>
              <FeatureCard 
                icon={<PiggyBank className="h-5 w-5" />}
                emoji="💸"
                title="Withdraw Cash"
                description="Transfer rewards to your wallet"
              />
            </Link>
            
            <FeatureCard 
              icon={<Share className="h-5 w-5" />}
              emoji="🔗"
              title="Invite & Earn More"
              description="Refer friends and earn bonus"
              onClick={() => {
                setIsPointsSheetOpen(false);
                // This would open the referral modal in a real app
              }}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Index;
