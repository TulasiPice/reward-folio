
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReferralFlow } from "./ReferralFlow";
import { useToast } from "@/hooks/use-toast";
import { X, Sparkle } from "lucide-react";
import { ReferralWelcome } from "./ReferralWelcome";

type Product = {
  id: number;
  name: string;
  reward: string;
  description: string;
};

// Default product that will be used since we're removing product selection
const defaultProduct = {
  id: 1,
  name: "Premium Subscription",
  reward: "500 points",
  description: "Most popular option with highest rewards"
};

export function ReferralModal({ 
  isOpen, 
  onClose, 
  initialProduct = null
}: { 
  isOpen: boolean; 
  onClose: () => void;
  initialProduct?: Product | null;
}) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialProduct || defaultProduct);
  const { toast } = useToast();

  const handleShare = (target: string) => {
    // In a real app, this would handle the actual sharing logic
    toast({
      title: "🎉 Invite sent!",
      description: "You're 1 step closer to earning rewards!",
      duration: 3000,
    });
  };

  const handleStartReferring = () => {
    setShowWelcome(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full w-full h-[100dvh] sm:h-[100dvh] md:h-[100dvh] p-0 m-0 rounded-none">
        <div className="flex flex-col h-full">
          {/* Header section */}
          <div className="bg-background border-b px-6 py-4 flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {showWelcome ? "Welcome" : "Invite Friends & Earn Rewards"}
            </DialogTitle>
            <button 
              className="rounded-full p-1 hover:bg-muted" 
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content section - taking full remaining height */}
          <div className="flex-1 overflow-auto">
            {showWelcome ? (
              <ReferralWelcome onStart={handleStartReferring} />
            ) : (
              <div className="p-6">
                <ReferralFlow 
                  product={selectedProduct} 
                  onShare={handleShare}
                  onBack={onClose} // Changed to directly close the modal since there's no "back" anymore
                />
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
