
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
    className: "bg-white text-[#001858]",
    image: "/lovable-uploads/15dafaa2-0ec0-4fcb-8136-772a5ea1dac1.png"
  },
  Platinum: {
    color: "#E5E4E2",
    icon: "👑",
    className: "bg-white text-[#333333]"
  }
};

export function TierBadge({ tier, className }: TierProps) {
  const config = tierConfig[tier];
  
  // Special rendering for Gold tier with image
  if (tier === "Gold" && config.image) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <img 
          src={config.image} 
          alt="Gold Tier" 
          className="h-6 w-6" 
        />
        <Badge 
          className={cn(
            "font-semibold text-sm py-1 px-2", 
            config.className
          )}
        >
          {tier}
        </Badge>
      </div>
    );
  }
  
  // Default rendering for other tiers
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
