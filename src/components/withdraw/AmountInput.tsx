
import { Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useUpiForm } from "@/hooks/withdraw/useUpiForm";
import { useBankForm } from "@/hooks/withdraw/useBankForm";

interface AmountInputProps {
  paymentMethod: string;
}

export const AmountInput = ({ paymentMethod }: AmountInputProps) => {
  const { upiForm } = useUpiForm();
  const { bankForm } = useBankForm();
  
  return (
    <div className="bg-muted/40 rounded-lg p-6 border">
      <h3 className="text-lg font-medium mb-4">
        <Wallet className="inline mr-2 h-5 w-5" /> Amount to withdraw
      </h3>
      <div className="relative w-full max-w-md mx-auto mb-2">
        <Input 
          placeholder="0" 
          type="number"
          min="1"
          className="pl-12 text-2xl h-14 font-semibold"
          value={
            paymentMethod === "upi" 
              ? upiForm.watch("amount") 
              : bankForm.watch("amount")
          }
          onChange={(e) => {
            if (paymentMethod === "upi") {
              upiForm.setValue("amount", e.target.value);
            } else if (paymentMethod === "bank") {
              bankForm.setValue("amount", e.target.value);
            }
          }}
        />
        <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-muted-foreground font-medium text-lg">
          ₹
        </div>
      </div>
      <p className="text-sm text-center text-muted-foreground">
        <Wallet className="inline mr-1 h-4 w-4" /> Your available balance: ₹3,240
      </p>
    </div>
  );
};
