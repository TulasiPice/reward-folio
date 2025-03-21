
import { PointsCard } from "@/components/home/PointsCard";
import { RecentTransactions } from "@/components/home/RecentTransactions";
import { QuickActions } from "@/components/home/QuickActions";

const Index = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your rewards and points.
        </p>
      </div>
      
      <div className="space-y-6">
        <PointsCard />
        <QuickActions />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Index;
