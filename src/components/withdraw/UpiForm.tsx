
import { Info, Timer, Clock, Calendar } from "lucide-react";
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
import { useUpiForm } from "@/hooks/withdraw/useUpiForm";

export const UpiForm = () => {
  const { upiForm } = useUpiForm();
  
  return (
    <Form {...upiForm}>
      <div className="space-y-4">
        <FormField
          control={upiForm.control}
          name="upiId"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormLabel>
                  <img 
                    src="/lovable-uploads/598db391-65b3-4fd6-9167-0694b3f6b7da.png" 
                    alt="UPI" 
                    className="inline h-4 w-4 mr-1" 
                  /> UPI ID
                </FormLabel>
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
        
        <PayoutTimeline />
      </div>
    </Form>
  );
};

const PayoutTimeline = () => (
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
          <p className="text-sm font-medium"><Clock className="inline mr-1 h-3.5 w-3.5" /> Processing</p>
          <p className="text-xs text-muted-foreground">Verified within 24 hours</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="bg-muted h-6 w-6 rounded-full flex items-center justify-center text-muted-foreground mt-0.5">
          <Calendar className="h-3.5 w-3.5" />
        </div>
        <div>
          <p className="text-sm font-medium"><Calendar className="inline mr-1 h-3.5 w-3.5" /> Transfer</p>
          <p className="text-xs text-muted-foreground">Typically 1-2 business days</p>
        </div>
      </div>
    </div>
  </div>
);
