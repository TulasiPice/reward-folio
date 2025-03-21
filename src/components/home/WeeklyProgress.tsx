
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";

export function WeeklyProgress() {
  const weeklyGoal = 5;
  const currentProgress = 3;
  const progressPercentage = (currentProgress / weeklyGoal) * 100;

  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-emerald" />
          Your Weekly Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold">{currentProgress}<span className="text-lg text-muted-foreground">/{weeklyGoal}</span></div>
            <p className="text-sm text-muted-foreground">Referrals this week</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          <div className="pt-4 border-t border-border">
            <h4 className="font-medium mb-2">Weekly Goals</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${currentProgress >= 1 ? 'bg-emerald text-white' : 'bg-muted'}`}>
                  {currentProgress >= 1 && <span className="text-[10px]">✓</span>}
                </div>
                <span className={`text-sm ${currentProgress >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>1 referral - 100 bonus points</span>
              </div>
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${currentProgress >= 3 ? 'bg-emerald text-white' : 'bg-muted'}`}>
                  {currentProgress >= 3 && <span className="text-[10px]">✓</span>}
                </div>
                <span className={`text-sm ${currentProgress >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>3 referrals - 350 bonus points</span>
              </div>
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${currentProgress >= 5 ? 'bg-emerald text-white' : 'bg-muted'}`}>
                  {currentProgress >= 5 && <span className="text-[10px]">✓</span>}
                </div>
                <span className={`text-sm ${currentProgress >= 5 ? 'text-foreground' : 'text-muted-foreground'}`}>5 referrals - 1000 bonus points</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
