
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Send() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  
  const recentContacts = [
    { id: 1, name: "Alex Smith", avatar: "" },
    { id: 2, name: "Jamie Williams", avatar: "" },
    { id: 3, name: "Taylor Johnson", avatar: "" },
    { id: 4, name: "Morgan Lee", avatar: "" },
    { id: 5, name: "Jordan Brown", avatar: "" },
    { id: 6, name: "Casey Davis", avatar: "" },
    { id: 7, name: "Riley Wilson", avatar: "" },
  ];

  const handleSend = () => {
    if (!amount || !recipient) {
      toast({
        title: "Missing information",
        description: "Please enter both amount and recipient",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: `₹${amount} sent to ${recipient}`,
    });
    
    // Reset form
    setAmount("");
    setRecipient("");
  };

  return (
    <div className="py-6">
      <div className="mb-6">
        <Link to="/" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
          <CardDescription>Send money to friends and family</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5">₹</span>
              <Input
                id="amount"
                type="number"
                placeholder="0"
                className="pl-7"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient</Label>
            <Input
              id="recipient"
              placeholder="Enter name or phone number"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Contacts</Label>
            <div className="border rounded-md p-4">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {recentContacts.slice(0, 6).map((contact) => (
                    <CarouselItem key={contact.id} className="pl-2 basis-1/3 sm:basis-1/4 md:basis-1/5">
                      <Card 
                        className="overflow-hidden cursor-pointer hover:bg-accent/10 transition-colors h-full"
                        onClick={() => setRecipient(contact.name)}
                      >
                        <CardContent className="p-3 flex flex-col items-center gap-2 justify-center h-full">
                          <UserAvatar name={contact.name} src={contact.avatar} size="sm" />
                          <span className="text-xs font-medium truncate text-center w-full">{contact.name}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-3 flex items-center gap-2 text-muted-foreground"
                  >
                    <Users size={16} />
                    <span>View All Contacts</span>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">All Contacts</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {recentContacts.map((contact) => (
                        <Button 
                          key={contact.id}
                          variant="ghost"
                          className="flex items-center justify-start gap-2 w-full h-auto py-2"
                          onClick={() => setRecipient(contact.name)}
                        >
                          <UserAvatar name={contact.name} src={contact.avatar} size="sm" />
                          <span>{contact.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSend}>
            Send Money
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
