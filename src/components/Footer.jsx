import React from 'react';
import { 
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaAward
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-gray-800 bg-black mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">MODELLE</div>
            <p className="text-gray-400">Representing diverse talent and redefining beauty standards worldwide.</p>
            <div className="flex items-center mt-4 text-sm text-gray-500">
              <FaAward className="mr-2" /> Award-Winning Agency Since 2010
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Talent Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Female Models</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Male Models</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Runway Talent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Talent</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Model Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">International Bookings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio Development</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
                <FaFacebook />
              </a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
                <FaYoutube />
              </a>
            </div>
            <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 py-3 rounded-sm font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all cursor-pointer">
              Contact Agency
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MODELLE Agency. All rights reserved. | Representing talent worldwide
        </div>
      </div>
    </footer>
  );
};

export default Footer;