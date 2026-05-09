import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Github, Linkedin, Instagram, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/personal-projects", label: "Projects" },
  { to: "/web-design", label: "Web Design" },
  { to: "/web-development", label: "Web Dev" },
  { to: "/software-development", label: "Software Dev" },
  { to: "/database-development", label: "Database Dev" },
  { to: "/about-me", label: "About Me" },
  { to: "/contact-me", label: "Contact" },
];

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-4 md:py-6 md:px-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-black">Sebastian Stati</span>
            <div className="w-2 h-2 rounded-full bg-[#E8B923]"></div>
          </Link>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map((link, i) => (
              <span key={link.to} className="flex items-center">
                {i > 0 && <span className="text-[#4A4A4A]">|</span>}
                <Link
                  to={link.to}
                  className={`px-3 py-2 transition-colors ${isActive(link.to) ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-black/10 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-3 rounded-lg transition-colors text-base ${
                    isActive(link.to)
                      ? 'text-black bg-black/5 font-medium'
                      : 'text-[#4A4A4A] hover:text-black hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-8 px-4 md:py-12 md:px-8 mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white mb-3">Phone</h4>
            <p className="text-sm text-gray-300">07407299421</p>
          </div>
          <div>
            <h4 className="text-white mb-3">Email</h4>
            <p className="text-sm text-gray-300">statisebastian6@gmail.com</p>
          </div>
          <div>
            <h4 className="text-white mb-3">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/statisebastian6-star" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sebastian-stati-0390ab408/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/statisebastian6" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-300">&copy; 2026 Sebastian Stati</p>
            <p className="text-xs text-gray-400 mt-1">Powered by Wix</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
