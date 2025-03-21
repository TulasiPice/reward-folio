
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { transactions } from "@/utils/mockData";
import { formatRelativeTime, getTransactionColor, formatTransactionAmount } from "@/utils/formatters";
import { ArrowDown, ArrowUp, Gift } from "lucide-react";

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
  
  return (
    <Card className="border-none shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentTransactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between animate-fade-in">
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
                <span className="text-sm text-muted-foreground">
                  {transaction.description}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                {formatTransactionAmount(transaction)}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatRelativeTime(transaction.date)}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
