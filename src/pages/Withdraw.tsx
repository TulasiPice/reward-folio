
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft, ArrowUp, ChevronDown } from "lucide-react";
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

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  method: z.string().min(1, "Withdrawal method is required"),
  address: z.string().min(1, "Withdrawal address is required"),
});

const Withdraw = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      method: "",
      address: "",
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
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Withdraw Points</h1>
          <p className="text-muted-foreground">
            Convert your points to rewards or cash.
          </p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Withdraw Your Points</CardTitle>
          <CardDescription>
            You can withdraw your points to various payment methods.
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
                          Points:
                        </div>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Your available balance: 3,240 points
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
                      Enter the address where you want to receive your points.
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
                    Withdraw Points
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 items-start border-t pt-6">
          <div className="text-sm font-medium">Withdrawal policy</div>
          <p className="text-sm text-muted-foreground">
            Withdrawals are processed within 2-3 business days. Minimum withdrawal amount is 1,000 points.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Withdraw;
