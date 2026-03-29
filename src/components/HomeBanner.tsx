
function HomeBanner() {
  return (
    <div
      className="mb-16 pt-8 opacity-0 animate-[slideUpSmall_0.8s_ease-out_forwards]"
    >
      <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          BlogVerse
        </span>
      </h1>
      <p className="text-white/70 text-lg text-center mt-4 max-w-2xl mx-auto">
        A platform for developers to share ideas, stories, and insights
      </p>
    </div>
  );
}

export default HomeBanner;