
import { User, CreditCard, Building, Info, Timer, Clock, Calendar } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useBankForm } from "@/hooks/withdraw/useBankForm";

export const BankForm = () => {
  const { bankForm } = useBankForm();
  
  return (
    <Form {...bankForm}>
      <div className="space-y-4">
        <FormField
          control={bankForm.control}
          name="accountHolder"
          render={({ field }) => (
            <FormItem>
              <FormLabel><User className="inline mr-1 h-4 w-4" /> Account Holder Name</FormLabel>
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
                <FormLabel><CreditCard className="inline mr-1 h-4 w-4" /> Account Number</FormLabel>
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
                <FormLabel><Building className="inline mr-1 h-4 w-4" /> IFSC Code</FormLabel>
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
        
        <BankPayoutTimeline />
      </div>
    </Form>
  );
};

const BankPayoutTimeline = () => (
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
          <p className="text-sm font-medium"><Clock className="inline mr-1 h-3.5 w-3.5" /> Verification</p>
          <p className="text-xs text-muted-foreground">Bank details verified within 24 hours</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="bg-muted h-6 w-6 rounded-full flex items-center justify-center text-muted-foreground mt-0.5">
          <Calendar className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-sm font-medium"><Calendar className="inline mr-1 h-3.5 w-3.5" /> Bank Processing</p>
          <p className="text-xs text-muted-foreground">2-3 business days for NEFT/IMPS transfers</p>
        </div>
      </div>
    </div>
  </div>
);
