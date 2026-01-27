import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/", active: true },
  { label: "Work", href: "/work" },
  { label: "Travel", href: "/travel" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-foreground font-semibold tracking-wider text-sm md:text-base hover:text-yellow-400 transition-colors">
            JESSE OTUMBA OTIENO
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    (item.label === "Travel" && location.pathname === "/travel") ||
                    (item.label === "Education" && location.pathname === "/education") ||
                    (item.label === "Contact" && location.pathname === "/contact") ||
                    item.active
                      ? "nav-link-active font-medium"
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
            className="md:hidden text-foreground"
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
                      (item.label === "Travel" && location.pathname === "/travel") ||
                      (item.label === "Education" && location.pathname === "/education") ||
                      (item.label === "Contact" && location.pathname === "/contact") ||
                      item.active
                        ? "nav-link-active font-medium"
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