
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src: string;
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  shape?: "circle" | "hexagon";
}

export function UserAvatar({ 
  src, 
  name, 
  size = "md", 
  className = "",
  shape = "circle" 
}: UserAvatarProps) {
  const sizeClasses = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
    
  const hexagonClass = shape === "hexagon" ? "clip-path-hexagon bg-gradient-to-b from-amber-300 to-amber-500" : "";

  return (
    <Avatar className={`${sizeClasses[size]} ${className} ${hexagonClass} ${shape === "circle" ? "ring-2 ring-background" : ""}`}>
      <AvatarImage src={src} alt={name} className="object-cover" />
      <AvatarFallback className={`${shape === "hexagon" ? "bg-gradient-to-b from-amber-300 to-amber-500 text-amber-900 font-bold" : "bg-primary/10 text-primary font-medium"}`}>
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
