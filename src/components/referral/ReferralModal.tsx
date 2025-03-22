
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
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

  const handleShare = (target: string) => {
    console.log(`Sharing referral to: ${target}`);
    // Here you would implement the actual sharing logic
    // This could open native share APIs or generate specific links
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full w-full h-[100dvh] sm:h-[100dvh] md:h-[100dvh] p-0 m-0 rounded-none">
        <div className="flex flex-col h-full">
          {/* Header section */}
          <div className="bg-background border-b px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Invite Friends & Earn Rewards</h2>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>

          {/* Content section */}
          <div className="flex-1 overflow-auto p-6">
            <ReferralFlow 
              product={selectedProduct} 
              onBack={() => setSelectedProduct(null)} 
              onShare={handleShare} 
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
