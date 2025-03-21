
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { UpiForm } from "./UpiForm";
import { BankForm } from "./BankForm";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { AmountInput } from "./AmountInput";

interface WithdrawFormProps {
  isSubmitting: boolean;
  onSubmit: () => void;
}

export const WithdrawForm = ({ isSubmitting, onSubmit }: WithdrawFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <>
      <div className="space-y-6">
        {/* Prominent Amount Section */}
        <AmountInput paymentMethod={paymentMethod} />

        {/* Payment Method Selection */}
        <PaymentMethodSelector 
          paymentMethod={paymentMethod} 
          setPaymentMethod={setPaymentMethod} 
        />

        {/* Conditional Form Fields */}
        <div className="mt-6 space-y-6">
          {paymentMethod === "upi" && <UpiForm />}
          {paymentMethod === "bank" && <BankForm />}
        </div>
      </div>
      
      <CardFooter className="flex flex-col space-y-4 items-start border-t pt-6">
        <Button 
          onClick={onSubmit}
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              <ArrowUp className="h-4 w-4 mr-2" />
              Withdraw Cash
            </>
          )}
        </Button>
        
        <WithdrawPolicy paymentMethod={paymentMethod} />
      </CardFooter>
    </>
  );
};

interface WithdrawPolicyProps {
  paymentMethod: string;
}

const WithdrawPolicy = ({ paymentMethod }: WithdrawPolicyProps) => {
  return (
    <>
      <div className="text-sm font-medium w-full pt-2">
        <Info className="inline mr-1 h-4 w-4" /> Withdrawal policy
      </div>
      <p className="text-sm text-muted-foreground">
        {paymentMethod === "upi" && "Minimum withdrawal amount is ₹100. UPI withdrawals are usually processed faster than other methods."}
        {paymentMethod === "bank" && "Minimum withdrawal amount is ₹500. Bank transfers may take 2-3 business days to process."}
      </p>
    </>
  );
};
