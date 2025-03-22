
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
    className: "bg-gradient-to-r from-[#C0C0C0] to-[#E5E4E2] text-[#333333]"
  },
  Gold: {
    color: "#FFD700",
    icon: "🥇",
    className: "bg-gradient-to-b from-[#FFD700] to-[#ECC700] text-[#FFA500]"
  },
  Platinum: {
    color: "#E5E4E2",
    icon: "👑",
    className: "bg-gradient-to-r from-[#E5E4E2] to-[#BDBDBD] text-[#333333]"
  }
};

export function TierBadge({ tier, className }: TierProps) {
  const config = tierConfig[tier];
  
  return (
    <Badge 
      className={cn(
        "font-semibold text-sm py-1 px-2 border-none", 
        config.className,
        className
      )}
    >
      {tier}
    </Badge>
  );
}
