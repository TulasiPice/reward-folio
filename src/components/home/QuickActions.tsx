
import { Card, CardContent } from "@/components/ui/card";
import { Send, Download, Upload, Clock, ArrowDown, ArrowUp, Wallet, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickActions() {
  const actions = [
    { icon: Send, label: "Send", path: "/send", color: "bg-blue-100 text-blue-600" },
    { icon: ArrowDown, label: "Receive", path: "/receive", color: "bg-emerald-100 text-emerald-600" },
    { icon: Wallet, label: "Withdraw", path: "/withdraw", color: "bg-amber-100 text-amber-600" },
    { icon: FileText, label: "History", path: "/history", color: "bg-purple-100 text-purple-600" }
  ];
  
  return (
    <Card className="border-none shadow">
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-2">
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
