
import { Check, CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PaymentMethodSelectorProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

export const PaymentMethodSelector = ({ 
  paymentMethod, 
  setPaymentMethod 
}: PaymentMethodSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        <CreditCard className="inline mr-2 h-5 w-5" /> Select payment method
      </h3>
      <RadioGroup
        defaultValue="upi"
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        className="grid gap-4 md:grid-cols-2"
      >
        <div>
          <RadioGroupItem
            value="upi"
            id="upi"
            className="peer sr-only"
          />
          <label
            htmlFor="upi"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Check className="h-5 w-5 text-primary hidden peer-data-[state=checked]:block [&:has([data-state=checked])]:block mb-3" />
            <img 
              src="/lovable-uploads/598db391-65b3-4fd6-9167-0694b3f6b7da.png" 
              alt="UPI" 
              className="h-6 w-6 mb-3" 
            />
            <span className="text-sm font-medium">UPI</span>
          </label>
        </div>
        
        <div>
          <RadioGroupItem
            value="bank"
            id="bank"
            className="peer sr-only"
          />
          <label
            htmlFor="bank"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Check className="h-5 w-5 text-primary hidden peer-data-[state=checked]:block [&:has([data-state=checked])]:block mb-3" />
            <CreditCard className="h-6 w-6 mb-3" />
            <span className="text-sm font-medium">Bank</span>
          </label>
        </div>
      </RadioGroup>
    </div>
  );
};
