import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-3">
        <p className="section-kicker">GE Collective</p>
        <h1 className="text-4xl font-semibold text-white">404</h1>
        <p className="text-white/60">Page not found.</p>
        <a href="/" className="text-primary hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
