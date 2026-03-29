import { useState } from "react";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* TopBar for Mobile */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 h-14 px-4 flex items-center justify-between bg-black/70 backdrop-blur-xl z-10 border-b border-white/10 opacity-0 animate-[slideDownSmall_0.3s_ease-out_forwards]"
      >
        <button
          onClick={toggleSidebar}
          className="text-white/70 hover:text-white focus:outline-none transition-colors hover:scale-110 active:scale-95"
          aria-label="Toggle Sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          BlogVerse
        </h1>
        <div className="w-6" />
      </div>

      {/* Main content */}
      <main
        className={`flex-1 p-5 transition-all duration-300 ease-in-out mt-14 lg:mt-0 relative z-0 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${isSidebarOpen && window.innerWidth >= 1024 ? "lg:ml-64" : "lg:ml-20"
          }`}
      >
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
