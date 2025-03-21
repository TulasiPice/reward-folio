
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TransactionsList } from "@/components/wallet/TransactionsList";
import { transactions } from "@/utils/mockData";
import { ArrowLeft, Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function History() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [filter, setFilter] = useState("all");
  
  // Filter transactions based on search term and selected filter
  useEffect(() => {
    let result = transactions;
    
    // Apply type filter
    if (filter !== "all") {
      result = result.filter(tx => tx.type === filter);
    }
    
    // Apply search filter if there's a search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(tx => 
        tx.user.name.toLowerCase().includes(term) || 
        (tx.description && tx.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredTransactions(result);
  }, [searchTerm, filter]);
  
  // Get transaction ID from URL if present
  const transactionId = searchParams.get("id");
  const selectedTransaction = transactionId 
    ? transactions.find(tx => tx.id === transactionId)
    : null;

  return (
    <div className="container max-w-md mx-auto py-6">
      <div className="mb-6">
        <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Home</span>
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
          </CardContent>
        </Card>
      ) : (
        <>
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
          
          <div className="mb-6">
            <ToggleGroup 
              type="single" 
              value={filter} 
              onValueChange={(value) => value && setFilter(value)}
              className="w-full justify-start gap-2"
            >
              <ToggleGroupItem value="all" className="rounded-full px-4 py-1.5 text-sm">
                All
              </ToggleGroupItem>
              <ToggleGroupItem value="sent" className="rounded-full px-4 py-1.5 text-sm bg-blue-100 text-blue-800 dark:bg-blue-950/30 dark:text-blue-400 data-[state=on]:bg-blue-200 dark:data-[state=on]:bg-blue-800/40">
                Sent
              </ToggleGroupItem>
              <ToggleGroupItem value="received" className="rounded-full px-4 py-1.5 text-sm bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 data-[state=on]:bg-emerald-200 dark:data-[state=on]:bg-emerald-800/40">
                Received
              </ToggleGroupItem>
              <ToggleGroupItem value="reward" className="rounded-full px-4 py-1.5 text-sm bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400 data-[state=on]:bg-amber-200 dark:data-[state=on]:bg-amber-800/40">
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
