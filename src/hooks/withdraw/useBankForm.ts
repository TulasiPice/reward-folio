
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

const bankFormSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  accountHolder: z.string().min(1, "Account holder name is required"),
  accountNumber: z.string().min(1, "Account number is required"),
  ifscCode: z.string().min(1, "IFSC code is required"),
});

export const useBankForm = () => {
  const bankForm = useForm<z.infer<typeof bankFormSchema>>({
    resolver: zodResolver(bankFormSchema),
    defaultValues: {
      amount: "",
      accountHolder: "",
      accountNumber: "",
      ifscCode: "",
    },
  });
  
  const onBankSubmit = async (values: z.infer<typeof bankFormSchema>) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Withdrawal initiated",
      description: `You're withdrawing ₹${values.amount} to bank account: ${values.accountNumber}`,
    });
    
    bankForm.reset();
    return true;
  };
  
  return {
    bankForm,
    onBankSubmit
  };
};
