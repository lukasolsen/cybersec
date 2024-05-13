import { Outlet } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const RootPage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-full dark:bg-primary dark:text-white">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export const Route = createRootRoute({
  component: RootPage,
});
