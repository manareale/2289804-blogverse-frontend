import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";



function CTA() {
  return (
    <div className="flex justify-between items-center mb-8 px-4">
      <div className="text-white/60 text-sm font-medium tracking-wide">
        Latest Posts
      </div>
      <Link to="/create">
        <button
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <PlusCircle size={18} />
          New Post
        </button>
      </Link>
    </div>
  )
}

export default CTA;