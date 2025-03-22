
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface Milestone {
  label: string;
  value: string;
  achieved: boolean;
}

interface RewardsMilestoneTrackerProps {
  milestones: Milestone[];
  currentValue: string;
}

export const RewardsMilestoneTracker = ({ 
  milestones,
  currentValue
}: RewardsMilestoneTrackerProps) => {
  // Calculate progress percentage based on current value and highest milestone
  const currentValueNum = parseInt(currentValue.replace(/[^\d]/g, ''));
  const highestMilestoneValue = parseInt(milestones[milestones.length - 1].value.replace(/[^\d]/g, ''));
  const progressPercentage = Math.min(100, (currentValueNum / highestMilestoneValue) * 100);

  return (
    <div className="space-y-4">
      <Progress value={progressPercentage} className="h-2" />
      
      <div className="flex justify-between">
        {milestones.map((milestone, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center"
          >
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center mb-1 ${
                milestone.achieved 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted border border-muted-foreground/30'
              }`}
            >
              {milestone.achieved && (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span className={`text-xs font-medium ${milestone.achieved ? 'text-primary' : 'text-muted-foreground'}`}>
              {milestone.label}
            </span>
            <span className={`text-xs ${milestone.achieved ? 'font-medium' : 'text-muted-foreground'}`}>
              {milestone.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
