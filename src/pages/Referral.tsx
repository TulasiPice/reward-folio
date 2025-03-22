
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReferralStats } from "@/components/referral/ReferralStats";
import { ReferralStreak } from "@/components/referral/ReferralStreak";
import { RewardsMilestoneTracker } from "@/components/rewards/RewardsMilestoneTracker";
import { ReferralCode } from "@/components/referral/ReferralCode";
import { HowToRefer } from "@/components/referral/HowToRefer";
import { SocialSharing } from "@/components/referral/SocialSharing";
import { ContactsDrawer } from "@/components/referral/ContactsDrawer";

const Referral = () => {
  const navigate = useNavigate();
  // User referral stats - would come from your API in a real app
  const [referrals] = useState(7);
  const [streak] = useState(2);
  const [isHowToOpen, setIsHowToOpen] = useState(false);
  
  // Sample referral code
  const referralCode = "REWARD50";

  const handleShareContact = (contactPhone: string) => {
    // In a real app, this would handle sharing via the specific contact
    console.log(`Sharing referral with ${contactPhone}`);
    toast.success("Invitation sent successfully!");
  };

  const handleShareSocial = (platform: string) => {
    // In a real app, this would open the appropriate sharing mechanism
    console.log(`Sharing via ${platform}`);
    toast.success(`Shared on ${platform}!`);
  };

  const handleBack = () => {
    navigate("/"); // Navigate to Index page
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
        <h1 className="text-2xl font-bold">Refer & Earn</h1>
      </div>

      {/* Stats Display at the top */}
      <ReferralStats referrals={referrals} totalEarned="₹350" />

      {/* How to Refer Section as Collapsible Card */}
      <HowToRefer isOpen={isHowToOpen} onOpenChange={setIsHowToOpen} />

      {/* Referral Code Section */}
      <ReferralCode code={referralCode} />

      {/* Referral Milestone Section */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Referral Milestone</CardTitle>
        </CardHeader>
        <CardContent>
          <RewardsMilestoneTracker 
            milestones={[
              { label: "Silver", value: "5", achieved: referrals >= 5 },
              { label: "Gold", value: "10", achieved: referrals >= 10 },
              { label: "Platinum", value: "20", achieved: referrals >= 20 }
            ]} 
            currentValue={referrals.toString()}
          />
          <p className="text-xs text-center mt-4 text-muted-foreground">
            Refer {20 - referrals} more to unlock Platinum rewards 👑
          </p>
        </CardContent>
      </Card>

      {/* Referral Streak Section */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Referral Streak 🔥</CardTitle>
        </CardHeader>
        <CardContent>
          <ReferralStreak streak={streak} />
        </CardContent>
      </Card>

      {/* Share with Contacts Section - now a button that opens a drawer */}
      <ContactsDrawer onShareContact={handleShareContact} />

      {/* Social Media Sharing Section */}
      <SocialSharing onShare={handleShareSocial} />

      {/* Floating Button */}
      <div className="fixed bottom-20 right-4 z-10">
        <Button 
          size="lg" 
          className="rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700"
          onClick={() => navigate('/referral')}
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Track Referrals
        </Button>
      </div>
    </div>
  );
};

export default Referral;
