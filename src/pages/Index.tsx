
import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { RewardsMilestoneTracker } from "@/components/rewards/RewardsMilestoneTracker";
import { ExclusiveBenefits } from "@/components/rewards/ExclusiveBenefits";
import { useNavigate } from "react-router-dom";
import { FeatureCard } from "@/components/shared/FeatureCard";

const Index = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/wallet");
  };

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

      {/* Benefits Section */}
      <ExclusiveBenefits />
    </div>
  );
};

export default Index;
