
import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { RewardsMilestoneTracker } from "@/components/rewards/RewardsMilestoneTracker";
import { ExclusiveBenefits } from "@/components/rewards/ExclusiveBenefits";
import { useNavigate } from "react-router-dom";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TierBadge } from "@/components/shared/TierBadge";
import { InviteEarnCard } from "@/components/referral/InviteEarnCard";

const Index = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/wallet");
  };

  // For demo purposes, assume the user is Gold tier
  const user = {
    name: "Alex Thompson",
    tier: "Gold" as const
  };

  return (
    <div className="space-y-6">
      {/* Welcome section with vertical alignment similar to the image */}
      <div className="flex flex-col items-center mb-8 bg-[#0A1B78] text-white p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Welcome {user.name.split(" ")[0]},</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="h-24 w-24 rounded-full bg-[#FFD700] flex items-center justify-center shadow-md">
            <span className="text-4xl font-bold text-[#7A4E00]">{user.name.charAt(0)}</span>
          </div>
          <TierBadge 
            tier={user.tier} 
            className="px-6 py-2 text-sm rounded-full bg-white text-[#0A1B78]"
          />
        </div>
      </div>

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

      {/* Cards Group - Using FeatureCard for better clickability */}
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard 
          emoji="💵"
          title="Cash"
          description="₹3,850"
          onClick={handleCardClick}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40"
        />

        <FeatureCard 
          emoji="🎯"
          title="Points"
          description="1,250"
          onClick={handleCardClick}
          className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40"
        />
      </div>

      {/* Invite & Earn Card */}
      <InviteEarnCard />

      {/* Benefits Section */}
      <ExclusiveBenefits />
    </div>
  );
};

export default Index;
