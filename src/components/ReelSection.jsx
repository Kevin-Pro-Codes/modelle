import React from 'react';
import { 
  FaPlay,
  FaHeart,
  FaComment,
  FaBookmark,
  FaArrowRight
} from 'react-icons/fa';

const ReelSection = ({ reels }) => {
  return (
    <section id="reels" className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trending <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Reels</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Watch behind-the-scenes moments, runway highlights, and exclusive content
          </p>
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-sm font-bold hover:shadow-lg hover:shadow-pink-500/20 transition-all flex items-center mx-auto cursor-pointer">
            <FaPlay className="mr-3" /> Follow on Instagram
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <div key={reel.id} className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm">
              <div className="relative aspect-[9/16] overflow-hidden">
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className={`bg-black/70 text-white text-sm px-3 py-1 rounded-sm ${reel.gender === 'male' ? 'bg-blue-500/50' : 'bg-pink-500/50'}`}>
                    <FaPlay className="inline mr-1" /> {reel.gender === 'male' ? '♂' : '♀'} Reel
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2">{reel.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{reel.views} views</span>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <FaHeart className="mr-1" /> {reel.likes}
                      </span>
                      <span className="flex items-center">
                        <FaComment className="mr-1" /> 245
                      </span>
                      <FaBookmark className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-white/30 text-white px-10 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors flex items-center mx-auto cursor-pointer">
            View All Reels <FaArrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReelSection;