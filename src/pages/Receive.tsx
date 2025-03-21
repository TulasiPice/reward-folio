
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode } from "@/components/receive/QrCode";
import { CopyButton } from "@/components/receive/CopyButton";
import { ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Receive = () => {
  const walletAddress = "0x3Fd...a4B2"; // Simulated wallet address
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Receive Points</h1>
          <p className="text-muted-foreground">
            Share your wallet address to receive points.
          </p>
        </div>
      </div>
      
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Your Referral QR Code</CardTitle>
          <CardDescription>Scan this code to send points to your wallet</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 p-6">
          <QrCode value={`https://example.com/send?to=${walletAddress}`} size={220} />
          
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-md">
              <div className="font-mono text-sm truncate max-w-[200px]">{walletAddress}</div>
              <CopyButton value={walletAddress} />
            </div>
            
            <Button className="w-full" variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share Address
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Receive;
