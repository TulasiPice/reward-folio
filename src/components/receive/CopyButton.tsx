
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CopyButtonProps {
  value: string;
}

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={copyToClipboard} 
      className="h-8 w-8 p-0"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy address</span>
    </Button>
  );
}
