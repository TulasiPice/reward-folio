
import { Card, CardContent } from "@/components/ui/card";
import { Share, Gift } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickActions() {
  const actions = [
    { icon: Gift, label: "Rewards", path: "/rewards", color: "bg-purple-100 text-purple-600" }
  ];
  
  return (
    <Card className="border-none shadow">
      <CardContent className="p-4">
        <div className="flex justify-center">
          {actions.map((action) => (
            <Link key={action.path} to={action.path}>
              <div className="flex flex-col items-center p-2 space-y-2 rounded-lg transition-all hover:bg-muted hover-scale">
                <div className={`p-3 rounded-full ${action.color}`}>
                  <action.icon size={20} />
                </div>
                <span className="text-xs font-medium">{action.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
