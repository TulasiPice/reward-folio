
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Button } from "@/components/ui/button";
import { Trophy, Users } from "lucide-react";
import { users } from "@/utils/mockData";

export function Leaderboard() {
  // Take top 3 users for the leaderboard based on points
  const topUsers = [...users].sort((a, b) => b.points - a.points).slice(0, 3);

  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-amber-500" />
          Top Referrers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topUsers.map((user, index) => (
            <div key={user.id} className="flex items-center">
              <div className="w-6 flex-shrink-0">
                <span className={`font-semibold ${index === 0 ? 'text-amber-500' : index === 1 ? 'text-gray-500' : 'text-amber-700'}`}>
                  #{index + 1}
                </span>
              </div>
              <div className="flex items-center space-x-3 flex-1 ml-2">
                <UserAvatar src={user.avatar} name={user.name} size="sm" />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{user.name}</h3>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{user.points}</div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-3 mt-2 rounded-lg bg-accent/10 border border-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 text-center">
                  <span className="font-semibold text-emerald">8</span>
                </div>
                <span className="text-sm">Your rank</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">1,240</div>
                <div className="text-xs text-muted-foreground">to next rank</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full">
          <Users className="mr-2 h-4 w-4" />
          View Full Leaderboard
        </Button>
      </CardFooter>
    </Card>
  );
}
