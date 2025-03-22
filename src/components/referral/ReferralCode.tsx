
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

interface ReferralCodeProps {
  code: string;
}

export const ReferralCode = ({ code }: ReferralCodeProps) => {
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
        <CardTitle className="text-lg">Your Referral Code</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
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
      </CardContent>
    </Card>
  );
};
