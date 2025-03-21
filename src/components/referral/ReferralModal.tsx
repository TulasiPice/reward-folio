
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReferralFlow } from "./ReferralFlow";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ReferralWelcome } from "./ReferralWelcome";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: any;
}

export function ReferralModal({ isOpen, onClose, initialProduct }: ReferralModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || null);
  const [showWelcome, setShowWelcome] = useState(true);

  // Reset to welcome screen when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Small delay to avoid flashing during transition
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // If a product is initially selected, skip welcome screen
  useEffect(() => {
    if (initialProduct) {
      setShowWelcome(false);
    }
  }, [initialProduct]);

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
  };

  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full w-full h-[100dvh] sm:h-[100dvh] md:h-[100dvh] p-0 m-0 rounded-none">
        <div className="flex flex-col h-full">
          {/* Header section */}
          <div className="bg-background border-b px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Invite Friends & Earn Rewards</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content section */}
          <div className="flex-1 overflow-auto">
            <ReferralFlow
              onSelectProduct={handleProductSelect}
              selectedProduct={selectedProduct}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
