
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode } from "@/components/receive/QrCode";
import { CopyButton } from "@/components/receive/CopyButton";
import { ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Receive() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [paymentLink, setPaymentLink] = useState("https://pay.example.com/u/user123");
  
  // Update payment link when amount or note changes
  const updatePaymentLink = () => {
    let link = "https://pay.example.com/u/user123";
    if (amount) {
      link += `?amount=${amount}`;
      if (note) {
        link += `&note=${encodeURIComponent(note)}`;
      }
    } else if (note) {
      link += `?note=${encodeURIComponent(note)}`;
    }
    setPaymentLink(link);
  };
  
  // Update payment link whenever amount or note changes
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setTimeout(updatePaymentLink, 100);
  };
  
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
    setTimeout(updatePaymentLink, 100);
  };

  // Share payment link (only works on supported devices)
  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Payment Request",
          text: note || "Payment request",
          url: paymentLink,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  return (
    <div className="container max-w-md mx-auto py-6">
      <div className="mb-6">
        <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <Tabs defaultValue="qr" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="qr">QR Code</TabsTrigger>
          <TabsTrigger value="link">Payment Link</TabsTrigger>
        </TabsList>
        
        <TabsContent value="qr">
          <Card>
            <CardHeader>
              <CardTitle>Receive with QR Code</CardTitle>
              <CardDescription>Let others scan this QR code to pay you</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="mx-auto max-w-[200px]">
                <QrCode value={paymentLink} size={200} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (optional)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">₹</span>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0"
                    className="pl-7"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="note">Note (optional)</Label>
                <Input
                  id="note"
                  placeholder="What's this for?"
                  value={note}
                  onChange={handleNoteChange}
                />
              </div>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full" onClick={shareLink}>
                <Share2 className="h-4 w-4 mr-2" />
                Share QR Code
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="link">
          <Card>
            <CardHeader>
              <CardTitle>Payment Link</CardTitle>
              <CardDescription>Share this link to receive payment</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted rounded-lg flex justify-between items-center">
                <div className="truncate mr-2">
                  {paymentLink}
                </div>
                <CopyButton value={paymentLink} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="link-amount">Amount (optional)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">₹</span>
                  <Input
                    id="link-amount"
                    type="number"
                    placeholder="0"
                    className="pl-7"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="link-note">Note (optional)</Label>
                <Input
                  id="link-note"
                  placeholder="What's this for?"
                  value={note}
                  onChange={handleNoteChange}
                />
              </div>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full" onClick={shareLink}>
                <Share2 className="h-4 w-4 mr-2" />
                Share Payment Link
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
