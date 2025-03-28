
import { Badge } from "@/components/ui/badge";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Transaction } from "@/utils/mockData";
import { formatRelativeTime, getTransactionColor, formatTransactionAmount } from "@/utils/formatters";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface TransactionsListProps {
  transactions: Transaction[];
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  const isMobile = useIsMobile();
  
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

  if (transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-60 text-muted-foreground">
        <p>No transactions found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="divide-y divide-border rounded-lg overflow-hidden border border-border">
        {transactions.map((transaction) => (
          <Link 
            to={`/history?id=${transaction.id}`} 
            key={transaction.id} 
            className="flex items-center justify-between py-3 px-4 hover:bg-muted/50 transition-colors animate-fade-in"
          >
            <div className="flex items-center space-x-3 overflow-hidden">
              <UserAvatar 
                src={transaction.user.avatar} 
                name={transaction.user.name}
                size={isMobile ? "xs" : "sm"}
              />
              <div className="flex flex-col min-w-0">
                <span className="font-medium truncate">{transaction.user.name}</span>
                <div className="flex items-center mt-1 space-x-2">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatRelativeTime(transaction.date)}
                  </span>
                  {transaction.description && !isMobile && (
                    <span className="text-xs truncate max-w-[150px]">
                      {transaction.description}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                {formatTransactionAmount(transaction).replace('$', '₹')}
              </span>
              <div className="mt-1">
                {getStatusBadge(transaction.type)}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="flex justify-center mt-4">
        <Link to="/history" className="text-sm text-primary hover:underline">
          View all transactions
        </Link>
      </div>
    </div>
  );
}
