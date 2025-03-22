
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPoints } from "@/utils/formatters";

interface RedeemHeaderProps {
  userPoints: number;
}

export function RedeemHeader({ userPoints }: RedeemHeaderProps) {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
        <ArrowLeft size={20} />
      </Link>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Redeem Points</h1>
        <p className="text-muted-foreground">
          You have <span className="font-medium text-foreground">{formatPoints(userPoints)}</span> points to spend.
        </p>
      </div>
    </div>
  );
}
