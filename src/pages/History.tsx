import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TransactionsList } from "@/components/wallet/TransactionsList";
import { transactions } from "@/utils/mockData";
import { ArrowLeft, Search, Award } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function History() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [filter, setFilter] = useState("all");
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  useEffect(() => {
    let result = transactions;
    
    if (filter !== "all") {
      result = result.filter(tx => tx.type === filter);
    }
    
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(tx => 
        tx.user.name.toLowerCase().includes(term) || 
        (tx.description && tx.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredTransactions(result);
  }, [searchTerm, filter]);
  
  const transactionId = searchParams.get("id");
  const selectedTransaction = transactionId 
    ? transactions.find(tx => tx.id === transactionId)
    : null;

  const handleRedeemTransaction = () => {
    toast({
      title: "Transaction Redeemed!",
      description: `You've successfully redeemed points from transaction ${selectedTransaction?.id}`,
    });
  };

  const isRedeemable = selectedTransaction?.type === 'received';

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Link to="/" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
      
      {selectedTransaction ? (
        <Card>
          <CardHeader>
            <CardTitle>Transaction Details</CardTitle>
            <CardDescription>
              {new Date(selectedTransaction.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Amount</div>
              <div className="text-2xl font-bold">
                ₹{selectedTransaction.amount.toFixed(2)}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span className="font-medium capitalize">{selectedTransaction.type}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">From/To</span>
                <span className="font-medium">{selectedTransaction.user.name}</span>
              </div>
              
              {selectedTransaction.description && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Note</span>
                  <span className="font-medium">{selectedTransaction.description}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">
                  {new Date(selectedTransaction.date).toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction ID</span>
                <span className="font-medium">{selectedTransaction.id}</span>
              </div>
            </div>

            {isRedeemable && (
              <div className="pt-4">
                <Button 
                  className="w-full"
                  onClick={handleRedeemTransaction}
                >
                  <Award className="mr-2" />
                  Redeemed
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="text-left mb-4">
            <h1 className="text-lg font-medium">Transaction History</h1>
            <p className="text-sm text-muted-foreground">Your recent activity</p>
          </div>
          
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search transactions..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-6 overflow-x-auto pb-2">
            <ToggleGroup 
              type="single" 
              value={filter} 
              onValueChange={(value) => value && setFilter(value)}
              className={`w-full ${isMobile ? 'justify-start' : 'justify-center'} gap-2 flex-nowrap`}
            >
              <ToggleGroupItem 
                value="all" 
                className="rounded-full px-4 py-1.5 text-sm border border-gray-300 dark:border-gray-700 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary whitespace-nowrap"
              >
                All
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="sent" 
                className="rounded-full px-4 py-1.5 text-sm border border-gray-300 dark:border-gray-700 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary whitespace-nowrap"
              >
                Sent
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="received" 
                className="rounded-full px-4 py-1.5 text-sm border border-gray-300 dark:border-gray-700 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary whitespace-nowrap"
              >
                Received
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="reward" 
                className="rounded-full px-4 py-1.5 text-sm border border-gray-300 dark:border-gray-700 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary whitespace-nowrap"
              >
                Reward
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <TransactionsList transactions={filteredTransactions} />
        </>
      )}
    </div>
  );
}
