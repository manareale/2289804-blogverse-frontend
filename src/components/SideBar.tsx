import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, PencilLine, User, LogOut } from "lucide-react";
import { removeToken } from "@/utils/auth";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const navItems = [
  { to: "/", label: "Home", icon: <Home size={20} /> },
  { to: "/create", label: "Create", icon: <PencilLine size={20} /> },
  { to: "/profile", label: "Profile", icon: <User size={20} /> },
];

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/login')
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden backdrop-blur-sm opacity-0 animate-[fadeIn_0.2s_ease-out_forwards]"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 z-20 h-full bg-black/40 backdrop-blur-xl border-r border-white/10 shadow-2xl text-white transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0 lg:w-20"}
        `}
      >
        {/* Header */}
        <div className={`flex items-center ${isOpen ? "justify-between" : "justify-center"} p-4 border-b border-white/10`}>
          <h1
            className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight transition-opacity duration-200 ${
              isOpen ? "block opacity-100" : "hidden opacity-0"
            }`}
          >
            BlogVerse
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-white/70 hover:text-white focus:outline-none transition-colors hover:scale-110 active:scale-95"
            aria-label="Toggle Sidebar"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="space-y-2 p-4 pt-6">
          {navItems.map(({ to, label, icon }, idx) => (
            <Link key={to} to={to}>
              <div
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 opacity-0 animate-[fadeInLeftSmall_0.3s_ease-out_forwards] ${
                  location.pathname === to
                    ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-white/20 text-white"
                    : "hover:bg-white/10 text-white/70 hover:text-white"
                } ${isOpen ? "hover:translate-x-1" : ""}`}
                onClick={() => {
                  if (window.innerWidth < 1024) toggleSidebar();
                }}
              >
                {icon}
                <span
                  className={`font-semibold text-sm transition-opacity duration-200 ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
                >
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute bottom-6 left-4 right-4 flex items-center justify-center gap-3 py-3 px-4 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 hover:text-red-200 rounded-lg transition-all duration-300 font-semibold text-sm hover:scale-105 active:scale-95"
          aria-label="Logout"
        >
          <LogOut size={18} />
          <span
            className={`transition-opacity duration-200 ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
          >
            Logout
          </span>
        </button>
      </div>
    </>
  );
}
