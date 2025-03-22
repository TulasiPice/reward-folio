
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { RewardsMilestoneTracker } from "@/components/rewards/RewardsMilestoneTracker";
import { ReferralStreak } from "@/components/referral/ReferralStreak";
import { ReferralStats } from "@/components/referral/ReferralStats";
import { toast } from "sonner";
import { Share, ArrowRight, BarChart3, ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Mock data for demonstration purposes
const mockUserContacts = [
  {
    id: "1",
    name: "Aarav Kumar",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "+91 9876543210"
  },
  {
    id: "2",
    name: "Diya Patel",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "+91 8765432109"
  },
  {
    id: "3",
    name: "Arjun Singh",
    avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    phone: "+91 7654321098"
  }
];

// Social platforms to share on
const socialPlatforms = ["WhatsApp", "Telegram", "Instagram", "LinkedIn", "Twitter"];

const Referral = () => {
  const navigate = useNavigate();
  // User referral stats - would come from your API in a real app
  const [referrals] = useState(7);
  const [streak] = useState(2);
  const [isHowToOpen, setIsHowToOpen] = useState(false);

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
    navigate(-1);
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
      <Collapsible
        open={isHowToOpen}
        onOpenChange={setIsHowToOpen}
        className="w-full"
      >
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="pb-2 cursor-pointer flex flex-row items-center justify-between">
              <CardTitle className="text-lg">How to Refer</CardTitle>
              <ChevronDown className={`h-4 w-4 transition-transform ${isHowToOpen ? 'transform rotate-180' : ''}`} />
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <ul className="space-y-2 pl-5 list-disc text-sm text-muted-foreground">
                <li>Share your referral link with friends</li>
                <li>They sign up and start using the app</li>
                <li>You earn rewards instantly 🎉</li>
              </ul>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

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

      {/* Share with Contacts Section */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Share with Contacts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockUserContacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <UserAvatar
                  src={contact.avatarUrl}
                  name={contact.name}
                  size="sm"
                />
                <span className="text-sm font-medium">{contact.name}</span>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleShareContact(contact.phone)}
              >
                Invite
              </Button>
            </div>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full mt-2 text-muted-foreground"
          >
            View all contacts <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* Social Media Sharing Section */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Or Share via Social Media</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-2">
            {socialPlatforms.map((platform) => (
              <Button
                key={platform}
                variant="outline"
                size="sm"
                className="flex flex-col items-center justify-center h-16 p-1 text-xs"
                onClick={() => handleShareSocial(platform)}
              >
                <Share className="h-4 w-4 mb-1" />
                {platform}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

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
