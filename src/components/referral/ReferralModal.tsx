
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductSelection } from "./ProductSelection";
import { ShareOptions } from "./ShareOptions";
import { useToast } from "@/hooks/use-toast";
import { Step } from "lucide-react";

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
  const [step, setStep] = useState(initialProduct ? 2 : 1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialProduct);
  const { toast } = useToast();

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setStep(2);
  };
  
  const handleShare = (platform: string) => {
    // In a real app, this would handle the actual sharing logic
    toast({
      title: "Referral sent!",
      description: "You're one step closer to your reward.",
      duration: 3000,
    });
    
    setTimeout(() => {
      onClose();
      // Reset the modal state for next time
      setStep(1);
      setSelectedProduct(null);
    }, 1000);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {step === 1 ? "Select a Product to Refer" : "Share Your Referral"}
          </DialogTitle>
        </DialogHeader>
        
        {step === 1 ? (
          <ProductSelection onSelect={handleProductSelect} />
        ) : (
          <ShareOptions 
            product={selectedProduct} 
            onShare={handleShare}
            onBack={handleBack}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
