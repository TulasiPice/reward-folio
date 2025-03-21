
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductSelection } from "./ProductSelection";
import { ReferralFlow } from "./ReferralFlow";
import { useToast } from "@/hooks/use-toast";

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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {step === "product" ? "Select a Product to Refer" : "Invite Friends & Earn Rewards"}
          </DialogTitle>
        </DialogHeader>
        
        {step === "product" ? (
          <ProductSelection onSelect={handleProductSelect} />
        ) : (
          <ReferralFlow 
            product={selectedProduct} 
            onShare={handleShare}
            onBack={handleBack}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
