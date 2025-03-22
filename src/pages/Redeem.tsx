
import { Ticket, Wallet } from "lucide-react";
import { useState } from "react";
import { currentUser } from "@/utils/mockData";
import { useVouchers } from "@/hooks/use-vouchers";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RedeemHeader } from "@/components/redeem/RedeemHeader";
import { VouchersTab } from "@/components/redeem/VouchersTab";
import { CashRedeemTab } from "@/components/redeem/CashRedeemTab";

const Redeem = () => {
  const [redeemType, setRedeemType] = useState<"vouchers" | "cash">("vouchers");
  
  // Get vouchers from hook
  const { vouchers, isLoading, error } = useVouchers();

  return (
    <div className="space-y-6">
      <RedeemHeader userPoints={currentUser.points} />
      
      <Tabs defaultValue="vouchers" value={redeemType} onValueChange={(value) => setRedeemType(value as "vouchers" | "cash")} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="vouchers" className="flex items-center gap-2">
            <Ticket className="h-4 w-4" />
            <span>Vouchers</span>
          </TabsTrigger>
          <TabsTrigger value="cash" className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span>Cash</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      {redeemType === "vouchers" ? (
        <VouchersTab vouchers={vouchers} userPoints={currentUser.points} />
      ) : (
        <CashRedeemTab userPoints={currentUser.points} />
      )}
    </div>
  );
};

export default Redeem;
