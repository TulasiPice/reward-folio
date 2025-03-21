
import { useEffect, useState } from "react";
import { formatPoints } from "@/utils/formatters";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  duration?: number;
  prefix?: string;
}

export function AnimatedNumber({ 
  value, 
  className = "", 
  duration = 1000,
  prefix = ""
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    // Set starting value (previous value or 0 if first render)
    const startValue = displayValue;
    const increment = (value - startValue) / (duration / 16); // 60fps
    
    let currentValue = startValue;
    const timer = setInterval(() => {
      currentValue += increment;
      
      // Check if we've reached or gone past the target
      if ((increment >= 0 && currentValue >= value) || 
          (increment < 0 && currentValue <= value)) {
        clearInterval(timer);
        setDisplayValue(value);
      } else {
        setDisplayValue(Math.round(currentValue));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return (
    <span className={`${className} tabular-nums transition-all`}>
      {prefix}{formatPoints(displayValue)}
    </span>
  );
}
