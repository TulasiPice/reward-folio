
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { currentUser } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [withdrawMethod, setWithdrawMethod] = useState("upi");
  const [bankAccount, setBankAccount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [processing, setProcessing] = useState(false);
  
  const availableBalance = currentUser.points;
  
  const handleWithdraw = () => {
    if (!amount) {
      toast({
        title: "Missing information",
        description: "Please enter an amount to withdraw",
        variant: "destructive",
      });
      return;
    }
    
    if (parseFloat(amount) > availableBalance) {
      toast({
        title: "Insufficient balance",
        description: "The amount exceeds your available balance",
        variant: "destructive",
      });
      return;
    }
    
    if (withdrawMethod === "bank" && !bankAccount) {
      toast({
        title: "Missing information",
        description: "Please enter a bank account number",
        variant: "destructive",
      });
      return;
    }
    
    if (withdrawMethod === "upi" && !upiId) {
      toast({
        title: "Missing information",
        description: "Please enter a UPI ID",
        variant: "destructive",
      });
      return;
    }
    
    setProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setProcessing(false);
      toast({
        title: "Withdrawal initiated",
        description: `₹${amount} will be sent to your ${withdrawMethod === "bank" ? "bank account" : "UPI ID"} within 24 hours`,
      });
      
      // Reset form
      setAmount("");
      setBankAccount("");
      setUpiId("");
    }, 2000);
  };

  return (
    <div className="container max-w-md mx-auto py-6 px-4">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-muted/80">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Withdraw Money</CardTitle>
          <CardDescription>Transfer funds to your bank account or UPI</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground">Available Balance</div>
            <div className="text-2xl font-bold">₹{formatPoints(availableBalance)}</div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-2xl text-foreground">₹</span>
              <Input
                id="amount"
                type="number"
                placeholder="0"
                className="pl-8 border-none bg-transparent focus-visible:ring-0 text-2xl font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Withdrawal Method</Label>
            <RadioGroup value={withdrawMethod} onValueChange={setWithdrawMethod} className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 rounded-lg border p-4">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex-1 cursor-pointer font-medium">UPI</Label>
                <span className="text-xs text-muted-foreground">Instant</span>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border p-4">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="flex-1 cursor-pointer font-medium">Bank Transfer</Label>
                <span className="text-xs text-muted-foreground">1-2 days</span>
              </div>
            </RadioGroup>
          </div>
          
          {withdrawMethod === "bank" ? (
            <div className="space-y-2">
              <Label htmlFor="bank-account">Bank Account Number</Label>
              <Input
                id="bank-account"
                placeholder="Enter your bank account number"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
              <div className="flex items-center p-3 bg-amber-50 text-amber-800 rounded-lg">
                <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Bank transfers typically take 1-2 business days to process</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="upi-id">UPI ID</Label>
              <Input
                id="upi-id"
                placeholder="username@bank"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <div className="flex items-center p-3 bg-emerald-50 text-emerald-800 rounded-lg">
                <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">UPI transfers are typically processed instantly</span>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter>
          <Button 
            className="w-full"
            onClick={handleWithdraw} 
            disabled={processing}
          >
            {processing ? "Processing..." : "Withdraw Money"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
