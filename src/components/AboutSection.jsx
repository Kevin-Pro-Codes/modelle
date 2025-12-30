import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Creative</span> Vision
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              With over a decade in the fashion industry, we bring a unique perspective that blends 
              traditional modeling with contemporary artistic expression. We represent diverse talent 
              from around the world, focusing on inclusivity and innovation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3" />
                <span>Representing 250+ models worldwide</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                <span>Male and female talent across all categories</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3" />
                <span>Creative direction for luxury brands</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop" 
              alt="Portrait 1" 
              className="rounded-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop';
              }}
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" 
              alt="Portrait 2" 
              className="rounded-2xl mt-8"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;