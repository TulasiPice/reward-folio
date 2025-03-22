
import { cn } from "@/lib/utils";

interface Milestone {
  label: string;
  value: string;
  achieved: boolean;
}

interface RewardsMilestoneTrackerProps {
  milestones: Milestone[];
  currentValue: string;
}

export function RewardsMilestoneTracker({ milestones, currentValue }: RewardsMilestoneTrackerProps) {
  // Calculate percentage for progress bar
  const lastMilestoneValue = parseInt(milestones[milestones.length - 1].value.replace(/[^0-9]/g, ''));
  const currentValueNum = parseInt(currentValue.replace(/[^0-9]/g, ''));
  const progressPercentage = Math.min(100, (currentValueNum / lastMilestoneValue) * 100);
  
  return (
    <div className="space-y-4">
      <div className="relative pt-6">
        {/* Progress bar background */}
        <div className="absolute top-6 left-0 right-0 h-2 bg-muted rounded-full" />
        
        {/* Active progress */}
        <div 
          className="absolute top-6 left-0 h-2 bg-primary rounded-full" 
          style={{ width: `${progressPercentage}%` }}
        />
        
        {/* Current value indicator */}
        <div 
          className="absolute top-3 flex flex-col items-center transform -translate-x-1/2"
          style={{ left: `${progressPercentage}%` }}
        >
          <div className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5 font-medium">
            {currentValue}
          </div>
          <div className="w-2 h-2 mt-1 bg-primary rounded-full" />
        </div>
        
        {/* Milestone markers */}
        <div className="flex justify-between relative">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={cn(
                  "w-4 h-4 rounded-full border-2 border-background z-10",
                  milestone.achieved ? "bg-primary" : "bg-muted"
                )}
              />
              <div className="text-xs font-medium mt-2">{milestone.label}</div>
              <div className="text-xs text-muted-foreground">{milestone.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
