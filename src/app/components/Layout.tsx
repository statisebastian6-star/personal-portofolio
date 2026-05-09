import { Link, Outlet, useLocation } from "react-router";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-black">Sebastian Stati</span>
            <div className="w-2 h-2 rounded-full bg-[#E8B923]"></div>
          </Link>

          <nav className="flex items-center gap-1 text-sm">
            <Link
              to="/"
              className={`px-3 py-2 transition-colors ${isActive('/') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              Home
            </Link>
            <span className="text-[#4A4A4A]">|</span>
            <Link
              to="/personal-projects"
              className={`px-3 py-2 transition-colors ${isActive('/personal-projects') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              Projects
            </Link>
            <span className="text-[#4A4A4A]">|</span>
            <Link
              to="/web-design"
              className={`px-3 py-2 transition-colors ${isActive('/web-design') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              Web Design
            </Link>
            <span className="text-[#4A4A4A]">|</span>
            <Link
              to="/web-development"
              className={`px-3 py-2 transition-colors ${isActive('/web-development') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              Web Dev
            </Link>
            <span className="text-[#4A4A4A]">|</span>
            <Link
              to="/software-development"
              className={`px-3 py-2 transition-colors ${isActive('/software-development') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              Software Dev
            </Link>
            <span className="text-[#4A4A4A]">|</span>
            <Link
              to="/database-development"
              className={`px-3 py-2 transition-colors ${isActive('/database-development') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              Database Dev
            </Link>
            <span className="text-[#4A4A4A]">|</span>
            <Link
              to="/about-me"
              className={`px-3 py-2 transition-colors ${isActive('/about-me') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              About Me
            </Link>
            <span className="text-[#4A4A4A]">|</span>
            <Link
              to="/contact-me"
              className={`px-3 py-2 transition-colors ${isActive('/contact-me') ? 'text-black' : 'text-[#4A4A4A] hover:text-black'}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-12 px-8 mt-20">
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
