
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { 
  WhatsappIcon, 
  TelegramIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  TwitterIcon 
} from "@/components/icons/SocialIcons";

// Social platforms to share on with their respective icons
const socialPlatforms = [
  { name: "WhatsApp", icon: WhatsappIcon, color: "#25D366" },
  { name: "Telegram", icon: TelegramIcon, color: "#0088cc" },
  { name: "Instagram", icon: InstagramIcon, color: "#E1306C" },
  { name: "LinkedIn", icon: LinkedinIcon, color: "#0077B5" },
  { name: "Twitter", icon: TwitterIcon, color: "#1DA1F2" }
];

interface SocialSharingProps {
  onShare: (platform: string) => void;
  code?: string;
}

export const SocialSharing = ({ onShare, code = "REWARD50" }: SocialSharingProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Referral code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Share via Social Media</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Referral Code */}
        <div className="flex space-x-2 mb-2">
          <Input 
            value={code} 
            readOnly 
            className="font-mono text-center text-lg font-bold"
          />
          <Button 
            size="icon" 
            onClick={handleCopyCode}
            variant="outline"
            className="flex-shrink-0"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="grid grid-cols-5 gap-2">
          {socialPlatforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              size="sm"
              className="flex flex-col items-center justify-center h-16 p-1 text-xs"
              onClick={() => onShare(platform.name)}
            >
              <platform.icon className="h-4 w-4 mb-1" style={{ color: platform.color }} />
              <span className="text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                {platform.name}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
