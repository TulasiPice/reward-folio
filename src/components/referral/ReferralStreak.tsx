
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ReferralStreakProps {
  streak: number;
}

export const ReferralStreak = ({ streak }: ReferralStreakProps) => {
  const days = [
    { label: "Day 1", achieved: streak >= 1 },
    { label: "Day 2", achieved: streak >= 2 },
    { label: "Day 3", achieved: streak >= 3 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        {days.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <Badge
              variant={day.achieved ? "default" : "outline"}
              className={`w-full flex justify-center py-1.5 ${!day.achieved ? "bg-gray-100 text-gray-500 dark:bg-gray-800" : ""}`}
            >
              {day.label}
            </Badge>
          </div>
        ))}
      </div>

      {streak >= 3 && (
        <div className="mt-4 flex justify-center">
          <Badge
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5"
          >
            Bonus +₹100
          </Badge>
        </div>
      )}
      
      <p className="text-xs text-center mt-2 text-muted-foreground">
        Refer someone for {streak}/3 consecutive days to earn bonus rewards
      </p>
    </div>
  );
};
