
import { useState } from "react";
import { ArrowLeft, ArrowUp, Info } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WithdrawForm } from "@/components/withdraw/WithdrawForm";
import { useUpiForm } from "@/hooks/withdraw/useUpiForm";
import { useBankForm } from "@/hooks/withdraw/useBankForm";

const Withdraw = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  
  const { upiForm, onUpiSubmit } = useUpiForm();
  const { bankForm, onBankSubmit } = useBankForm();
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      if (paymentMethod === "upi") {
        await upiForm.handleSubmit(onUpiSubmit)();
      } else if (paymentMethod === "bank") {
        await bankForm.handleSubmit(onBankSubmit)();
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle><ArrowUp className="inline mr-2 h-5 w-5" /> Withdraw Your Cash</CardTitle>
          <CardDescription>
            <Info className="inline mr-1 h-4 w-4" /> You can withdraw your cash to various payment methods.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <WithdrawForm 
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Withdraw;
