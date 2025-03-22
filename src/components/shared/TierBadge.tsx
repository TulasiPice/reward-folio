
import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TierProps = {
  tier: "Silver" | "Gold" | "Platinum";
  className?: string;
};

const tierConfig = {
  Silver: {
    color: "#C0C0C0",
    icon: "🥈",
    className: "bg-[#C0C0C0] hover:bg-[#B0B0B0] text-[#333333]"
  },
  Gold: {
    color: "#FFD700",
    icon: "🥇",
    className: "bg-[#FFD700] hover:bg-[#ECC700] text-[#5D4400]"
  },
  Platinum: {
    color: "#E5E4E2",
    icon: "👑",
    className: "bg-[#E5E4E2] hover:bg-[#D5D4D2] text-[#333333]"
  }
};

export function TierBadge({ tier, className }: TierProps) {
  const config = tierConfig[tier];
  
  return (
    <Badge 
      className={cn(
        "font-medium text-xs py-1 px-2 gap-1", 
        config.className,
        className
      )}
    >
      <span>{config.icon}</span> {tier}
    </Badge>
  );
}
