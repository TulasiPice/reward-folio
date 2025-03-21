
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { users, currentUser } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import { toast } from "sonner";
import { Search, Send } from "lucide-react";

export function SendForm() {
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const [amount, setAmount] = useState<number>(100);
  const [message, setMessage] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedUser) {
      toast.error("Please select a recipient");
      return;
    }
    
    if (amount <= 0) {
      toast.error("Amount must be greater than 0");
      return;
    }
    
    if (amount > currentUser.points) {
      toast.error("You don't have enough points");
      return;
    }
    
    setSending(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success(`${formatPoints(amount)} points sent to ${selectedUser.name}`);
      setSelectedUser(null);
      setAmount(100);
      setMessage("");
      setSending(false);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <Card className="border-none shadow">
        <CardContent className="p-4 sm:p-6">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search contacts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="h-[240px] overflow-y-auto">
            {filteredUsers.length > 0 ? (
              <div className="space-y-3">
                {filteredUsers.map((user) => (
                  <div 
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all cursor-pointer hover-scale ${
                      selectedUser?.id === user.id ? 'bg-primary/10 shadow-sm' : 'hover:bg-muted'
                    }`}
                  >
                    <UserAvatar src={user.avatar} name={user.name} />
                    <div className="flex-1">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{formatPoints(user.points)} points</p>
                    </div>
                    {selectedUser?.id === user.id && (
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <p>No contacts found</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow">
        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Amount</label>
              <div className="relative">
                <Input
                  type="number"
                  min={1}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="pl-10"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 font-semibold text-primary">
                  ★
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-muted-foreground">Your balance</span>
                <AnimatedNumber value={currentUser.points} className="font-medium" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Message</label>
              <Input
                placeholder="What's this for?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={!selectedUser || amount <= 0 || amount > currentUser.points || sending}
            >
              {sending ? "Sending..." : "Send Points"}
              <Send size={16} className="ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
