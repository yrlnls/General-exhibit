import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Featured Work", href: "/work" },
  { label: "Places", href: "/travel" },
  { label: "About", href: "/about" },
  { label: "Connect", href: "/connect" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-white/90 font-semibold tracking-[0.4em] text-xs md:text-sm uppercase hover:text-white transition-colors">
            GE Collective
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    (item.href === "/" && location.pathname === "/") ||
                    (item.href !== "/" && location.pathname.startsWith(item.href))
                      ? "nav-link-active"
                      : "nav-link"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={
                      (item.href === "/" && location.pathname === "/") ||
                      (item.href !== "/" && location.pathname.startsWith(item.href))
                        ? "nav-link-active"
                        : "nav-link"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
