
import { format, formatDistanceToNow } from 'date-fns';

// Format points with commas for thousands
export const formatPoints = (points: number): string => {
  return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Format date to readable format
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, 'MMM d, yyyy');
};

// Format time to readable format
export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, 'h:mm a');
};

// Format date as relative time (e.g., "2 days ago")
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};

// Format transaction amount with + or - sign
export const formatTransactionAmount = (transaction: { type: string; amount: number }): string => {
  if (transaction.type === 'received') {
    return `+₹${formatPoints(transaction.amount)}`;
  } else if (transaction.type === 'sent' || transaction.type === 'reward') {
    return `-₹${formatPoints(Math.abs(transaction.amount))}`;
  }
  return `₹${formatPoints(transaction.amount)}`;
};

// Get appropriate color for transaction type
export const getTransactionColor = (type: string): string => {
  switch (type) {
    case 'received':
      return 'text-emerald-600';
    case 'sent':
      return 'text-blue-600';
    case 'reward':
      return 'text-amber-600';
    default:
      return 'text-gray-600';
  }
};

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
