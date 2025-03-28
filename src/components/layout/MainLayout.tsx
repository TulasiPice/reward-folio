
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { TransitionWrapper } from "./TransitionWrapper";
import { useIsMobile } from "@/hooks/use-mobile";

export function MainLayout() {
  // In a real app, you would check if the user is authenticated
  // For now, we'll just simulate this with a simple check
  const isAuthenticated = true; // This would come from your auth context/state
  const isMobile = useIsMobile();

  // If not authenticated, redirect to sign-in page
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="min-h-screen max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
      <TransitionWrapper>
        <main className="space-y-6 p-6">
          <Outlet />
        </main>
      </TransitionWrapper>
    </div>
  );
}
