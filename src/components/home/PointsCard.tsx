
import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import { currentUser } from "@/utils/mockData";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function PointsCard() {
  return (
    <Card className="w-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-500">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserAvatar 
              src={currentUser.avatar} 
              name={currentUser.name} 
              size="lg"
              className="ring-white/20"
            />
            <div>
              <p className="text-white/80 text-sm">Welcome back</p>
              <h2 className="text-white font-semibold text-lg">{currentUser.name}</h2>
            </div>
          </div>
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white">
            <Sparkles size={18} />
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-white/80 text-sm">Your balance</p>
          <div className="flex items-baseline">
            <AnimatedNumber 
              value={currentUser.points} 
              className="text-white text-3xl font-bold" 
              duration={1500}
            />
            <span className="text-white/80 ml-2 text-sm">points</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="text-white/80 text-xs flex items-center">
            <ArrowUpRight size={14} className="mr-1" />
            <span>+250 points this month</span>
          </div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-7 h-1.5 rounded-full bg-white/20"></div>
            ))}
            <div className="w-7 h-1.5 rounded-full bg-white"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
