
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReferralFlow } from "./ReferralFlow";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: any;
}

export function ReferralModal({ isOpen, onClose, initialProduct }: ReferralModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || null);

  // If a product is initially selected, skip welcome screen
  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, [initialProduct]);

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
            <ReferralFlow product={selectedProduct} onBack={() => {}} onShare={() => {}} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
