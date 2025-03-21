
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft, ArrowUp, Calendar, Check, Clock, CreditCard, Info, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const upiFormSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  upiId: z.string().min(1, "UPI ID is required"),
});

const bankFormSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  accountHolder: z.string().min(1, "Account holder name is required"),
  accountNumber: z.string().min(1, "Account number is required"),
  ifscCode: z.string().min(1, "IFSC code is required"),
});

const Withdraw = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  
  const upiForm = useForm<z.infer<typeof upiFormSchema>>({
    resolver: zodResolver(upiFormSchema),
    defaultValues: {
      amount: "",
      upiId: "",
    },
  });
  
  const bankForm = useForm<z.infer<typeof bankFormSchema>>({
    resolver: zodResolver(bankFormSchema),
    defaultValues: {
      amount: "",
      accountHolder: "",
      accountNumber: "",
      ifscCode: "",
    },
  });
  
  const onUpiSubmit = async (values: z.infer<typeof upiFormSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Withdrawal initiated",
      description: `You're withdrawing ₹${values.amount} to UPI ID: ${values.upiId}`,
    });
    
    setIsSubmitting(false);
    upiForm.reset();
  };
  
  const onBankSubmit = async (values: z.infer<typeof bankFormSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Withdrawal initiated",
      description: `You're withdrawing ₹${values.amount} to bank account: ${values.accountNumber}`,
    });
    
    setIsSubmitting(false);
    bankForm.reset();
  };

  const handleSubmit = () => {
    if (paymentMethod === "upi") {
      upiForm.handleSubmit(onUpiSubmit)();
    } else if (paymentMethod === "bank") {
      bankForm.handleSubmit(onBankSubmit)();
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Withdraw Cash</h1>
          <p className="text-muted-foreground">
            Convert your cash to rewards or bank transfer.
          </p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Withdraw Your Cash</CardTitle>
          <CardDescription>
            You can withdraw your cash to various payment methods.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Prominent Amount Section */}
          <div className="bg-muted/40 rounded-lg p-6 border">
            <h3 className="text-lg font-medium mb-4">Amount to withdraw</h3>
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
              Your available balance: ₹3,240
            </p>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select payment method</h3>
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

          {/* Conditional Form Fields */}
          <div className="mt-6 space-y-6">
            {paymentMethod === "upi" && (
              <Form {...upiForm}>
                <div className="space-y-4">
                  <FormField
                    control={upiForm.control}
                    name="upiId"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormLabel>UPI ID</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Enter your UPI ID in the format name@bank</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <Input 
                            placeholder="yourname@upi" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="rounded-lg border bg-muted/40 p-4 space-y-3">
                    <h3 className="text-sm font-medium flex items-center gap-2">
                      <Timer className="h-4 w-4" />
                      Payout Timeline
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center text-white mt-0.5">
                          <Clock className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Processing</p>
                          <p className="text-xs text-muted-foreground">Verified within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-muted h-6 w-6 rounded-full flex items-center justify-center text-muted-foreground mt-0.5">
                          <Calendar className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Transfer</p>
                          <p className="text-xs text-muted-foreground">Typically 1-2 business days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}

            {paymentMethod === "bank" && (
              <Form {...bankForm}>
                <div className="space-y-4">
                  <FormField
                    control={bankForm.control}
                    name="accountHolder"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Holder Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name on your bank account" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={bankForm.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormLabel>Account Number</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Your bank account number (typically 11-16 digits)</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <Input placeholder="Enter account number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={bankForm.control}
                    name="ifscCode"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormLabel>IFSC Code</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>11-character code that identifies your bank branch</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <Input placeholder="e.g., SBIN0001234" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="rounded-lg border bg-muted/40 p-4 space-y-3">
                    <h3 className="text-sm font-medium flex items-center gap-2">
                      <Timer className="h-4 w-4" />
                      Payout Timeline
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center text-white mt-0.5">
                          <Clock className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Verification</p>
                          <p className="text-xs text-muted-foreground">Bank details verified within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-muted h-6 w-6 rounded-full flex items-center justify-center text-muted-foreground mt-0.5">
                          <Calendar className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Bank Processing</p>
                          <p className="text-xs text-muted-foreground">2-3 business days for NEFT/IMPS transfers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 items-start border-t pt-6">
          <Button 
            onClick={handleSubmit}
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
          
          <div className="text-sm font-medium w-full pt-2">Withdrawal policy</div>
          <p className="text-sm text-muted-foreground">
            {paymentMethod === "upi" && "Minimum withdrawal amount is ₹100. UPI withdrawals are usually processed faster than other methods."}
            {paymentMethod === "bank" && "Minimum withdrawal amount is ₹500. Bank transfers may take 2-3 business days to process."}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Withdraw;
