
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductSelection } from "./ProductSelection";
import { ReferralFlow } from "./ReferralFlow";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

type Product = {
  id: number;
  name: string;
  reward: string;
  description: string;
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
  const [step, setStep] = useState(initialProduct ? "flow" : "product");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialProduct);
  const { toast } = useToast();

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setStep("flow");
  };
  
  const handleShare = (target: string) => {
    // In a real app, this would handle the actual sharing logic
    toast({
      title: "🎉 Invite sent!",
      description: "You're 1 step closer to earning rewards!",
      duration: 3000,
    });
  };

  const handleBack = () => {
    setStep("product");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full w-full h-[100dvh] sm:h-[100dvh] md:h-[100dvh] p-0 m-0 rounded-none">
        <div className="flex flex-col h-full">
          {/* Header section */}
          <div className="bg-background border-b px-6 py-4 flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {step === "product" ? "Select a Product to Refer" : "Invite Friends & Earn Rewards"}
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
          <div className="flex-1 overflow-auto p-6">
            {step === "product" ? (
              <ProductSelection onSelect={handleProductSelect} />
            ) : (
              <ReferralFlow 
                product={selectedProduct} 
                onShare={handleShare}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
