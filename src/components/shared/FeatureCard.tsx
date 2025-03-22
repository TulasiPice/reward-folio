
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: ReactNode;
  emoji?: string;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

export function FeatureCard({ 
  icon, 
  emoji, 
  title, 
  description, 
  onClick,
  className
}: FeatureCardProps) {
  return (
    <Card 
      className={cn(
        "border shadow-sm hover:shadow-md transition-all cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-4 flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon || <span className="text-xl">{emoji}</span>}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
