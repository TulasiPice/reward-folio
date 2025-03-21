
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { transactions } from "@/utils/mockData";
import { formatRelativeTime, getTransactionColor, formatTransactionAmount } from "@/utils/formatters";
import { ArrowDown, ArrowUp, Gift } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function RecentTransactions() {
  // Get only the 5 most recent transactions
  const recentTransactions = transactions.slice(0, 5);
  
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'received':
        return <ArrowDown size={16} className="text-emerald-600" />;
      case 'sent':
        return <ArrowUp size={16} className="text-blue-600" />;
      case 'reward':
        return <Gift size={16} className="text-amber-600" />;
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
  
  return (
    <Card className="border-none shadow">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Recent Transactions</CardTitle>
        <Link to="/history" className="text-sm text-primary hover:underline">View all</Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentTransactions.map((transaction) => (
          <Link 
            to={`/history?id=${transaction.id}`} 
            key={transaction.id} 
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in"
          >
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
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-muted-foreground mr-2">
                    {formatRelativeTime(transaction.date)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                {formatTransactionAmount(transaction)}
              </span>
              <div className="mt-1">
                {getStatusBadge(transaction.type)}
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
