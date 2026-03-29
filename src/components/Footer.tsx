import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const links = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-white/10 mt-20 pt-12 pb-8">
      <div className="space-y-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div
            className="opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_forwards]"
          >
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
              BlogVerse
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A platform where developers share knowledge, stories, and insights about web development.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_0.1s_forwards]"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Create Article</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Profile</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div
            className="opacity-0 animate-[fadeInUpSmall_0.6s_ease-out_0.2s_forwards]"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {links.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom */}
        <div
          className="text-center text-white/50 text-sm opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
        >
          <p>&copy; 2025 BlogVerse. Created with passion for developers.</p>
        </div>
      </div>
    </footer>
  );
}
