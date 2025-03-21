
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser, pointsHistory } from "@/utils/mockData";
import { formatPoints } from "@/utils/formatters";
import { ArrowLeft, Settings, LogOut, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Profile = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopyId = () => {
    navigator.clipboard.writeText(currentUser.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/" className="p-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            View and manage your profile.
          </p>
        </div>
      </div>
      
      <Card className="border-none shadow">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <UserAvatar 
              src={currentUser.avatar} 
              name={currentUser.name} 
              size="xl"
            />
            <div className="flex-1 flex flex-col items-center sm:items-start">
              <h2 className="text-xl font-semibold">{currentUser.name}</h2>
              <p className="text-muted-foreground">{currentUser.email}</p>
              
              <div className="flex items-center mt-2 space-x-1 text-sm">
                <span className="text-muted-foreground">ID:</span>
                <span className="font-mono">{currentUser.id}</span>
                <button 
                  onClick={handleCopyId}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                </button>
              </div>
              
              <div className="mt-4 flex space-x-3">
                <Button variant="outline" size="sm">
                  <Settings size={16} className="mr-2" />
                  Settings
                </Button>
                <Button variant="outline" size="sm">
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Points History</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pointsHistory} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis 
                  width={50}
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => formatPoints(value)}
                />
                <Tooltip 
                  formatter={(value: number) => [formatPoints(value), 'Points']}
                  labelFormatter={(label) => `${label} 2023`}
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="points" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 0, fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm text-muted-foreground">Total Earned</p>
              <p className="text-2xl font-bold">4,750</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="text-2xl font-bold">900</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
