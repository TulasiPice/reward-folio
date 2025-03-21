
import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { transactions } from "@/utils/mockData";
import { formatDate, formatTime, getTransactionColor, formatTransactionAmount } from "@/utils/formatters";
import { ArrowDown, ArrowUp, Gift, ArrowLeft, ChevronUp, ChevronDown, ShoppingCart, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const History = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [expandedTransaction, setExpandedTransaction] = useState<string | null>(null);
  
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'received':
        return <ArrowDown size={18} className="text-emerald-600" />;
      case 'sent':
        return <ArrowUp size={18} className="text-blue-600" />;
      case 'reward':
        return <Gift size={18} className="text-amber-600" />;
      default:
        return null;
    }
  };
  
  const getStatusBadge = (type: string) => {
    switch (type) {
      case 'received':
        return <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 hover:bg-emerald-100">Received</Badge>;
      case 'sent':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-950/30 dark:text-blue-400 hover:bg-blue-100">Sent</Badge>;
      case 'reward':
        return <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400 hover:bg-amber-100">Reward</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };
  
  const filteredTransactions = filter 
    ? transactions.filter(t => t.type === filter)
    : transactions;
  
  const toggleTransaction = (id: string) => {
    if (expandedTransaction === id) {
      setExpandedTransaction(null);
    } else {
      setExpandedTransaction(id);
    }
  };
  
  return (
    <div className="space-y-6 pb-8 max-w-2xl mx-auto">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Transaction History</h1>
          <p className="text-muted-foreground">
            View your recent transaction history.
          </p>
        </div>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-2 -mx-1 px-1">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            filter === null 
              ? 'bg-primary text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          All Transactions
        </button>
        <button
          onClick={() => setFilter('received')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            filter === 'received' 
              ? 'bg-emerald-600 text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          Received
        </button>
        <button
          onClick={() => setFilter('sent')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            filter === 'sent' 
              ? 'bg-blue-600 text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          Sent
        </button>
        <button
          onClick={() => setFilter('reward')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            filter === 'reward' 
              ? 'bg-amber-600 text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          Rewards
        </button>
      </div>
      
      <div className="space-y-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <Card key={transaction.id} className="border overflow-hidden">
              <div 
                className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => toggleTransaction(transaction.id)}
              >
                <div className="flex items-center space-x-3">
                  <UserAvatar 
                    src={transaction.user.avatar} 
                    name={transaction.user.name}
                    size="md"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{transaction.user.name}</span>
                      {getStatusBadge(transaction.type)}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center mt-1">
                      <span>{formatDate(transaction.date)}</span>
                      <span className="mx-1">•</span>
                      <span>{formatTime(transaction.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                    {formatTransactionAmount(transaction)}
                  </span>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Tag size={12} className="mr-1" />
                    <span>{transaction.description}</span>
                  </div>
                  
                  <div className="mt-1">
                    {expandedTransaction === transaction.id ? 
                      <ChevronUp size={20} className="text-muted-foreground" /> : 
                      <ChevronDown size={20} className="text-muted-foreground" />
                    }
                  </div>
                </div>
              </div>
              
              {expandedTransaction === transaction.id && (
                <CardContent className="pt-0 bg-muted/10">
                  <div className="border-t pt-3">
                    <div className="flex items-center mb-2">
                      <ShoppingCart size={16} className="mr-2 text-muted-foreground" />
                      <span className="text-sm font-medium">Transaction Details</span>
                    </div>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="py-2 pl-0 font-medium text-sm">Transaction ID:</TableCell>
                          <TableCell className="py-2 text-right text-sm">{transaction.id.slice(0, 8)}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="py-2 pl-0 font-medium text-sm">Description:</TableCell>
                          <TableCell className="py-2 text-right text-sm">{transaction.description}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="py-2 pl-0 font-medium text-sm">Amount:</TableCell>
                          <TableCell className="py-2 text-right text-sm font-semibold">
                            {formatTransactionAmount(transaction)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="py-2 pl-0 font-medium text-sm">Date & Time:</TableCell>
                          <TableCell className="py-2 text-right text-sm">
                            {formatDate(transaction.date)} at {formatTime(transaction.date)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="py-2 pl-0 font-medium text-sm">Status:</TableCell>
                          <TableCell className="py-2 text-right">
                            {getStatusBadge(transaction.type)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <div className="mt-3 flex justify-end">
                      <button className="text-sm text-primary hover:underline">
                        View Receipt
                      </button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))
        ) : (
          <Card className="border py-12">
            <div className="text-center text-muted-foreground">
              <ShoppingCart size={40} className="mx-auto mb-3 opacity-20" />
              <p>No transactions found.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default History;
