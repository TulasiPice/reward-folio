import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft, ArrowUp, Calendar, Clock, CreditCard, Info, Timer } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  method: z.string().min(1, "Withdrawal method is required"),
  address: z.string().min(1, "Withdrawal address is required"),
});

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
  const [activeTab, setActiveTab] = useState("standard");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      method: "",
      address: "",
    },
  });
  
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
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Withdrawal initiated",
      description: `You're withdrawing ${values.amount} points to ${values.method}`,
    });
    
    setIsSubmitting(false);
    form.reset();
  };
  
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
      
      <Tabs 
        defaultValue="standard" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="upi" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/598db391-65b3-4fd6-9167-0694b3f6b7da.png" 
              alt="UPI" 
              className="h-4 w-4 inline-block" 
            />
            UPI
          </TabsTrigger>
          <TabsTrigger value="bank" className="flex items-center gap-1">
            <CreditCard className="h-3.5 w-3.5" />
            Bank
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="standard">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Your Cash</CardTitle>
              <CardDescription>
                You can withdraw your cash to various payment methods.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount to withdraw</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="0" 
                              {...field} 
                              type="number"
                              min="1"
                              className="pl-12"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-muted-foreground font-medium">
                              Cash:
                            </div>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Your available balance: ₹3,240
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="method"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Withdrawal method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select withdrawal method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="crypto">Cryptocurrency</SelectItem>
                            <SelectItem value="giftCard">Gift Card</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Withdrawal address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your withdrawal address" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter the address where you want to receive your cash.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        <ArrowUp className="mr-2 h-4 w-4" />
                        Withdraw Cash
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 items-start border-t pt-6">
              <div className="text-sm font-medium">Withdrawal policy</div>
              <p className="text-sm text-muted-foreground">
                Withdrawals are processed within 2-3 business days. Minimum withdrawal amount is ₹1,000.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="upi">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw via UPI</CardTitle>
              <CardDescription>
                Withdraw your cash directly to your UPI ID.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...upiForm}>
                <form onSubmit={upiForm.handleSubmit(onUpiSubmit)} className="space-y-6">
                  <FormField
                    control={upiForm.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount to withdraw (₹)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="0" 
                              {...field} 
                              type="number"
                              min="100"
                              className="pl-8"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-muted-foreground font-medium">
                              ₹
                            </div>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Your available balance: ₹3,240
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        <ArrowUp className="h-4 w-4 mr-2" />
                        Withdraw to UPI
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 items-start border-t pt-6">
              <div className="text-sm font-medium">UPI withdrawal policy</div>
              <p className="text-sm text-muted-foreground">
                Minimum withdrawal amount is ₹100. UPI withdrawals are usually processed faster than other methods.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="bank">
          <Card>
            <CardHeader>
              <CardTitle>Bank Transfer</CardTitle>
              <CardDescription>
                Withdraw directly to your bank account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...bankForm}>
                <form onSubmit={bankForm.handleSubmit(onBankSubmit)} className="space-y-6">
                  <FormField
                    control={bankForm.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount to withdraw (₹)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="0" 
                              {...field} 
                              type="number"
                              min="500"
                              className="pl-8"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-muted-foreground font-medium">
                              ₹
                            </div>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Your available balance: ₹3,240
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        <ArrowUp className="h-4 w-4 mr-2" />
                        Withdraw to Bank
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 items-start border-t pt-6">
              <div className="text-sm font-medium">Bank withdrawal policy</div>
              <p className="text-sm text-muted-foreground">
                Minimum withdrawal amount is ₹500. Bank transfers may take 2-3 business days to process.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Withdraw;
