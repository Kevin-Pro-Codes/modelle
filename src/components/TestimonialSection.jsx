import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What leading fashion houses and photographers say about working with our talent
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300 mb-6 italic">
              "Their diverse talent pool includes some of the most professional male models we've worked with. Exceptional agency."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-4"></div>
              <div>
                <div className="font-bold">Michael Zhang</div>
                <div className="text-gray-400 text-sm">Creative Director, GQ</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300 mb-6 italic">
              "The female models bring such professionalism and creativity to every shoot. Always our first choice."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-4"></div>
              <div>
                <div className="font-bold">Sarah Johnson</div>
                <div className="text-gray-400 text-sm">Editor, Vogue</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-300 mb-6 italic">
              "A true partner in creative excellence. Their models elevate every campaign we create together."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></div>
              <div>
                <div className="font-bold">James Wilson</div>
                <div className="text-gray-400 text-sm">Brand Director, Louis Vuitton</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;