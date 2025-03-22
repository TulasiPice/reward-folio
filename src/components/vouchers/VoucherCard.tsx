
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Voucher } from "@/types/voucher";
import { formatPoints } from "@/utils/formatters";
import { useState } from "react";
import { Ticket, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface VoucherCardProps {
  voucher: Voucher;
  userPoints: number;
}

export function VoucherCard({ voucher, userPoints }: VoucherCardProps) {
  const [isRedeeming, setIsRedeeming] = useState(false);
  const canAfford = userPoints >= voucher.pointsCost;
  const navigate = useNavigate();
  
  const handleRedeem = () => {
    if (!canAfford) {
      return;
    }
    
    setIsRedeeming(true);
    
    // Simulate API call
    setTimeout(() => {
      // Navigate to success page instead of showing toast
      navigate("/voucher-success", { state: { voucher } });
      setIsRedeeming(false);
    }, 1000);
  };
  
  return (
    <Card className="overflow-hidden border-none shadow hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={voucher.image}
          alt={voucher.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
          <Badge variant="default" className="flex items-center gap-1.5">
            <Tag className="h-3 w-3" />
            {formatPoints(voucher.pointsCost)} points
          </Badge>
          {voucher.featured && (
            <Badge variant="secondary" className="bg-amber-500">Featured</Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg">{voucher.title}</h3>
          <Badge variant="outline" className="bg-muted/50">
            {voucher.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{voucher.description}</p>
        
        {voucher.expiresAt && (
          <p className="text-xs text-muted-foreground mt-2">
            Expires: {new Date(voucher.expiresAt).toLocaleDateString()}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleRedeem}
          disabled={!canAfford || isRedeeming}
          variant={canAfford ? "default" : "outline"}
          className="w-full"
        >
          {isRedeeming ? (
            <>Redeeming...</>
          ) : canAfford ? (
            <>
              <Ticket className="w-4 h-4 mr-2" />
              Redeem Voucher
            </>
          ) : (
            <>Not Enough Points</>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
