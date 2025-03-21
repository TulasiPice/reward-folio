
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { transactions } from "@/utils/mockData";
import { formatDate, formatTime, getTransactionColor, formatTransactionAmount } from "@/utils/formatters";
import { ArrowDown, ArrowUp, Gift, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const History = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
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
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'received':
        return 'Received';
      case 'sent':
        return 'Sent';
      case 'reward':
        return 'Reward';
      default:
        return 'Unknown';
    }
  };
  
  const filteredTransactions = filter 
    ? transactions.filter(t => t.type === filter)
    : transactions;
  
  return (
    <div className="space-y-6">
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
      
      <div className="flex space-x-2">
        <button
          onClick={() => setFilter(null)}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === null 
              ? 'bg-primary text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('received')}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'received' 
              ? 'bg-emerald-600 text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          Received
        </button>
        <button
          onClick={() => setFilter('sent')}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'sent' 
              ? 'bg-blue-600 text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          Sent
        </button>
        <button
          onClick={() => setFilter('reward')}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'reward' 
              ? 'bg-amber-600 text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          Rewards
        </button>
      </div>
      
      <Card className="border-none shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">All Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="rounded-lg p-3 hover:bg-muted/50 transition-colors animate-fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-full">
                      {getTransactionIcon(transaction.type)}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <UserAvatar 
                          src={transaction.user.avatar} 
                          name={transaction.user.name}
                          size="sm"
                        />
                        <span className="font-medium">{transaction.user.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted">
                          {getTypeLabel(transaction.type)}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1">
                        {transaction.description}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                      {formatTransactionAmount(transaction)}
                    </span>
                    <div className="text-xs text-muted-foreground flex items-center space-x-1">
                      <span>{formatDate(transaction.date)}</span>
                      <span>•</span>
                      <span>{formatTime(transaction.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-muted-foreground">
              No transactions found.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
