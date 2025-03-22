
import { Link, useLocation } from "react-router-dom";
import { Home, Send, Gift, Clock, User, Ticket } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  
  const navigationItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/send", icon: Send, label: "Send" },
    { path: "/redeem", icon: Ticket, label: "Redeem" },
    { path: "/rewards", icon: Gift, label: "Rewards" },
    { path: "/history", icon: Clock, label: "History" },
    { path: "/profile", icon: User, label: "Profile" }
  ];
  
  return (
    <nav className="glass fixed bottom-0 left-0 right-0 z-50 py-3 sm:py-4 border-t border-muted mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
      <div className="flex justify-around items-center">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center transition-all duration-200 ${
                isActive 
                  ? "text-primary scale-105" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`p-1.5 ${isActive ? "bg-primary/10 rounded-full" : ""}`}>
                <item.icon size={20} />
              </div>
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && (
                <div className="h-1 w-1 rounded-full bg-primary mt-1 animate-pulse-light" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
