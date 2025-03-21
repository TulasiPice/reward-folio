
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { TransactionsList } from "@/components/wallet/TransactionsList";
import { transactions } from "@/utils/mockData";
import { ArrowLeft, Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
          
          <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sent">Sent</TabsTrigger>
              <TabsTrigger value="received">Received</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="pt-4">
              <TransactionsList transactions={filteredTransactions} />
            </TabsContent>
            
            <TabsContent value="sent" className="pt-4">
              <TransactionsList transactions={filteredTransactions} />
            </TabsContent>
            
            <TabsContent value="received" className="pt-4">
              <TransactionsList transactions={filteredTransactions} />
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}
