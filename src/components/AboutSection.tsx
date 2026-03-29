
function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
      <div
        className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent backdrop-blur-sm p-6 shadow-md hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300 opacity-0 animate-[slideLeftSmall_0.6s_ease-out_forwards]"
      >
        <h3 className="text-xl font-bold text-white mb-6">
          About the Platform
        </h3>
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://api.dicebear.com/9.x/notionists/svg?seed=Felix"
            alt="author"
            className="w-16 h-16 rounded-full border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
          />
          <div>
            <p className="text-white font-semibold">Abhishek Sharma</p>
            <p className="text-white/60 text-sm">Full Stack Engineer</p>
          </div>
        </div>
        <p className="text-white/70 leading-relaxed">
          A modern platform built for developers to share knowledge, insights, and
          stories about web development, design patterns, and best practices.
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent backdrop-blur-sm p-6 shadow-md hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300 opacity-0 animate-[slideRightSmall_0.6s_ease-out_forwards]"
      >
        <h3 className="text-xl font-bold text-white mb-4">
          Get Updates
        </h3>
        <p className="text-white/70 text-sm mb-5">
          Subscribe to receive weekly insights, new articles, and community
          highlights straight to your inbox.
        </p>
        <div className="space-y-3">
          {/* <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 bg-white/5 border border-white/20 text-white placeholder-white/40 rounded-lg focus:bg-white/10 focus:border-white/40 focus:outline-none transition-all duration-300"
          /> */}
          <button
            className="w-full px-4 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;