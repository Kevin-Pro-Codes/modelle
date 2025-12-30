import React from 'react';
import { 
  FaHome, 
  FaImages, 
  FaUser, 
  FaVideo, 
  FaShoppingBag, 
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaBars,
  FaTimes,
  FaSearch
} from 'react-icons/fa';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, navigation }) => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'FaHome': return <FaHome />;
      case 'FaImages': return <FaImages />;
      case 'FaUser': return <FaUser />;
      case 'FaVideo': return <FaVideo />;
      case 'FaShoppingBag': return <FaShoppingBag />;
      case 'FaEnvelope': return <FaEnvelope />;
      default: return <FaHome />;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold tracking-wider">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              MODELLE
            </span>
          </div>

          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-gray-900/80 rounded-lg p-2 backdrop-blur-sm">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-5 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300 group"
                >
                  <span className="mr-2">{getIcon(item.icon)}</span>
                  <span className="font-medium text-sm tracking-wide">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button className="p-2 hover:bg-gray-800 rounded-sm transition-colors">
              <FaSearch className="w-5 h-5 mr-5" />
            </button>
          
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-2 rounded-sm font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all">
              Book Now
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 hover:bg-gray-800 rounded-full"
          >
            {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-3">{getIcon(item.icon)}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#" className="p-3 hover:bg-gray-800 rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="p-3 hover:bg-gray-800 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="p-3 hover:bg-gray-800 rounded-full">
                <FaFacebook />
              </a>
              <a href="#" className="p-3 hover:bg-gray-800 rounded-full">
                <FaYoutube />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;