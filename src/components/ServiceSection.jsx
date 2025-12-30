import React from 'react';
import { 
  FaTshirt,
  FaCamera,
  FaGlobe
} from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive modeling services for brands, agencies, and creatives
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/50 transition-colors">
            <div className="text-4xl mb-6 text-pink-500">
              <FaTshirt />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fashion Modeling</h3>
            <p className="text-gray-300 mb-6">
              Runway shows, fashion weeks, designer collections, and haute couture presentations.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                Women's & Men's Fashion
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                Seasonal Collections
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                Couture Shows
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/50 transition-colors">
            <div className="text-4xl mb-6 text-blue-500">
              <FaCamera />
            </div>
            <h3 className="text-2xl font-bold mb-4">Commercial & Editorial</h3>
            <p className="text-gray-300 mb-6">
              Magazine features, brand campaigns, advertising, and promotional photography.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                Magazine Features
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                Brand Campaigns
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                Product Endorsements
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/50 transition-colors">
            <div className="text-4xl mb-6 text-purple-500">
              <FaGlobe />
            </div>
            <h3 className="text-2xl font-bold mb-4">International Representation</h3>
            <p className="text-gray-300 mb-6">
              Global placements, international markets, and cross-border brand collaborations.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                Global Market Access
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                International Campaigns
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                Worldwide Placement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;