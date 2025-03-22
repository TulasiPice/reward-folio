
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
    className: "bg-white text-[#333333]"
  },
  Gold: {
    color: "#FFD700",
    icon: "🥇",
    className: "bg-white text-[#001858]"
  },
  Platinum: {
    color: "#E5E4E2",
    icon: "👑",
    className: "bg-white text-[#333333]"
  }
};

export function TierBadge({ tier, className }: TierProps) {
  const config = tierConfig[tier];
  
  return (
    <Badge 
      className={cn(
        "font-semibold text-sm py-1 px-2", 
        config.className,
        className
      )}
    >
      {tier}
    </Badge>
  );
}
