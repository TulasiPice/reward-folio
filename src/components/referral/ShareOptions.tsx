
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Mail, 
  Link, 
  Copy, 
  Check, 
  ArrowLeft 
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  reward: string;
  description: string;
};

export function ShareOptions({ 
  product, 
  onShare,
  onBack 
}: { 
  product: Product | null; 
  onShare: (platform: string) => void;
  onBack: () => void;
}) {
  const [copied, setCopied] = useState(false);
  
  // Generate a fake referral link based on product name
  const referralLink = product ? 
    `https://yourapp.com/ref/${product.name.toLowerCase().replace(/\s+/g, '-')}/${Math.random().toString(36).substring(2, 8)}` 
    : 'https://yourapp.com/ref/default';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-5 py-2">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onBack}
        className="flex items-center text-muted-foreground hover:text-foreground mb-2 -ml-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Button>

      {product && (
        <div className="bg-accent/10 p-4 rounded-lg mb-4">
          <h3 className="font-medium text-foreground">Sharing: {product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            When someone uses your link, you'll earn {product.reward}!
          </p>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="referral-link" className="text-sm font-medium">
          Your Referral Link
        </label>
        <div className="flex space-x-2">
          <Input 
            id="referral-link"
            value={referralLink} 
            readOnly 
            className="font-mono text-sm"
          />
          <Button 
            size="icon" 
            onClick={handleCopy}
            variant="outline"
            className="flex-shrink-0"
          >
            {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Share via</p>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border-[#1877F2]/20"
            onClick={() => onShare('facebook')}
          >
            <Facebook className="mr-2 h-4 w-4 text-[#1877F2]" />
            Facebook
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border-[#1DA1F2]/20"
            onClick={() => onShare('twitter')}
          >
            <Twitter className="mr-2 h-4 w-4 text-[#1DA1F2]" />
            Twitter
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 bg-primary/10 hover:bg-primary/20 border-primary/20"
            onClick={() => onShare('email')}
          >
            <Mail className="mr-2 h-4 w-4 text-primary" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
}
