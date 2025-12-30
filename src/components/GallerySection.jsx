import React from 'react';
import { 
  FaHeart,
  FaShare,
  FaArrowRight,
  FaFilter
} from 'react-icons/fa';

const GallerySection = ({ selectedCategory, setSelectedCategory, categories, filteredItems }) => {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our diverse portfolio featuring both male and female models across all categories
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-3 bg-gray-900 rounded-sm hover:bg-gray-800 transition-colors flex items-center cursor-pointer">
            <FaFilter className="mr-2" /> Filter
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              className={`px-6 py-3 rounded-sm transition-all cursor-pointer ${selectedCategory === cat.toLowerCase() ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gray-900 hover:bg-gray-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-square overflow-hidden bg-gray-900">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${item.gender === 'male' ? 'bg-blue-500/20 text-blue-300' : 'bg-pink-500/20 text-pink-300'}`}>
                      {item.gender === 'male' ? '♂ Male' : '♀ Female'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-300">
                      <FaHeart className="mr-2" /> {item.likes}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">{item.category}</div>
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm cursor-pointer">
                      <FaShare className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-white/30 text-white px-10 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors flex items-center mx-auto cursor-pointer">
            Load More <FaArrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;