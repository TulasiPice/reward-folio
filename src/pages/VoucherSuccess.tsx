
import { ArrowLeft, Check } from "lucide-react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VoucherSuccess = () => {
  const location = useLocation();
  const voucherData = location.state?.voucher;
  
  // Redirect if accessed directly without voucher data
  if (!voucherData) {
    return <Navigate to="/redeem" replace />;
  }
  
  return (
    <div className="space-y-6 flex flex-col items-center justify-center h-full">
      <div className="bg-green-100 rounded-full p-5">
        <Check className="h-12 w-12 text-green-600" />
      </div>
      
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Redemption Successful!</h1>
        <p className="text-muted-foreground">
          You've successfully redeemed:
        </p>
        <p className="text-xl font-semibold">{voucherData.title}</p>
      </div>
      
      <div className="bg-muted p-4 rounded-lg mt-4 w-full max-w-md">
        <p className="text-sm text-muted-foreground mb-2">Voucher details:</p>
        <p className="text-sm">{voucherData.description}</p>
        
        {voucherData.expiresAt && (
          <p className="text-xs text-muted-foreground mt-2">
            Expires: {new Date(voucherData.expiresAt).toLocaleDateString()}
          </p>
        )}
      </div>
      
      <div className="flex flex-col space-y-3 w-full max-w-xs mt-4">
        <Button asChild>
          <Link to="/redeem">
            <ArrowLeft className="mr-2 h-4 w-4" /> 
            Back to vouchers
          </Link>
        </Button>
        
        <Button variant="outline" asChild>
          <Link to="/">Go to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default VoucherSuccess;
