
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TransitionWrapper } from "./TransitionWrapper";

export function MainLayout() {
  return (
    <div className="min-h-screen pb-24 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
      <TransitionWrapper>
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </TransitionWrapper>
      <Navbar />
    </div>
  );
}
