
import React from "react";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Card } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  reward: string;
  description: string;
};

type Contact = {
  id: string;
  name: string;
  avatarUrl: string;
  phone: string;
};

// Mock contacts data - in a real app, this would come from a backend or user's device
const mockContacts: Contact[] = [
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
  },
  {
    id: "4",
    name: "Ananya Sharma",
    avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    phone: "+91 6543210987"
  }
];

// Social platforms to share on
const socialPlatforms = ["WhatsApp", "Telegram", "Instagram", "LinkedIn", "Twitter"];

export function ReferralFlow({
  product,
  onShare,
  onBack
}: {
  product: Product | null;
  onShare: (target: string) => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-4 py-2">
      {product && (
        <Card className="bg-accent/10 p-4 mb-4">
          <h3 className="font-medium text-foreground">Sharing: {product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            When someone uses your link, you'll earn {product.reward}!
          </p>
        </Card>
      )}

      {/* How It Works Section */}
      <div className="space-y-2">
        <h3 className="font-semibold text-base">How It Works</h3>
        <ul className="space-y-2 pl-5 list-disc text-sm text-muted-foreground">
          <li>Tap 'Invite' next to a friend to send your referral link</li>
          <li>You earn coins + cash when they sign up 🎉</li>
          <li>Withdraw or spend your rewards anytime!</li>
        </ul>
      </div>

      {/* Contacts Section */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base">Your Contacts</h3>
        <div className="space-y-3 max-h-[180px] overflow-y-auto pr-1">
          {mockContacts.map((contact) => (
            <div 
              key={contact.id} 
              className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/10"
            >
              <div className="flex items-center gap-3">
                <UserAvatar 
                  src={contact.avatarUrl} 
                  name={contact.name} 
                  size="sm"
                />
                <div>
                  <span className="font-medium text-sm">{contact.name}</span>
                  <p className="text-xs text-muted-foreground">{contact.phone}</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                onClick={() => onShare(contact.phone)}
              >
                Invite
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Social Share Section */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base">Share on Social</h3>
        <div className="grid grid-cols-5 gap-2">
          {socialPlatforms.map((platform) => (
            <Button
              key={platform}
              variant="outline"
              size="sm"
              className="flex flex-col items-center justify-center h-16 p-1 text-xs"
              onClick={() => onShare(platform)}
            >
              <Share className="h-4 w-4 mb-1" />
              {platform}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
