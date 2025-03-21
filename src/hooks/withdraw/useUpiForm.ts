
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

const upiFormSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  upiId: z.string().min(1, "UPI ID is required"),
});

export const useUpiForm = () => {
  const upiForm = useForm<z.infer<typeof upiFormSchema>>({
    resolver: zodResolver(upiFormSchema),
    defaultValues: {
      amount: "",
      upiId: "",
    },
  });
  
  const onUpiSubmit = async (values: z.infer<typeof upiFormSchema>) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Withdrawal initiated",
      description: `You're withdrawing ₹${values.amount} to UPI ID: ${values.upiId}`,
    });
    
    upiForm.reset();
    return true;
  };
  
  return {
    upiForm,
    onUpiSubmit
  };
};
