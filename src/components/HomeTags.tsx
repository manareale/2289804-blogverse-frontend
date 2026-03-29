

function HomeTags() {
  const tags = ["#React", "#Tailwind", "#GlassUI", "#Frontend", "#DevTips"];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {tags.map((tag, idx) => (
        <div
          key={tag}
          style={{
            animationDelay: `${idx * 0.1}s`
          }}
          className="px-4 py-2 text-sm font-medium text-white/80 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 animate-[slideUpSmall_0.5s_ease-out_forwards] cursor-default"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default HomeTags;