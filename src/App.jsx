import { useState, useEffect, useRef } from 'react';
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
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShare,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaPlay,
  FaComment,
  FaBookmark,
  FaTshirt,
  FaCamera,
  FaGlobe,
  FaAward
} from 'react-icons/fa';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scaleLevel, setScaleLevel] = useState(1.1);
  const slideTimeoutRef = useRef(null);

  // Auto-rotate banner with better interval management
  useEffect(() => {
    slideTimeoutRef.current = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    
    return () => {
      if (slideTimeoutRef.current) {
        clearInterval(slideTimeoutRef.current);
      }
    };
  }, [isTransitioning]);

  // Reset timer when slide changes
  useEffect(() => {
    if (slideTimeoutRef.current) {
      clearInterval(slideTimeoutRef.current);
      slideTimeoutRef.current = setInterval(() => {
        if (!isTransitioning) {
          nextSlide();
        }
      }, 5000);
    }
  }, [currentSlide, isTransitioning]);

  const navigation = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'Gallery', href: '#gallery', icon: <FaImages /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Reels', href: '#reels', icon: <FaVideo /> },
    { name: 'Shop', href: '#shop', icon: <FaShoppingBag /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  const categories = ['All', 'Fashion', 'Portrait', 'Editorial', 'Commercial', 'Art', 'Male', 'Female'];

  // UPDATED: Mixed gallery with male and female models
  const galleryItems = [
    { id: 1, category: 'fashion', gender: 'female', title: 'Midnight Elegance', likes: 245, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop' },
    { id: 2, category: 'portrait', gender: 'female', title: 'Urban Portrait', likes: 189, image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop' },
    { id: 3, category: 'editorial', gender: 'female', title: 'Vogue Editorial', likes: 312, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop' },
    { id: 4, category: 'commercial', gender: 'male', title: 'Modern Gentleman', likes: 156, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop' },
    { id: 5, category: 'art', gender: 'male', title: 'Abstract Vision', likes: 278, image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&auto=format&fit=crop' },
    { id: 6, category: 'fashion', gender: 'female', title: 'Runway Glam', likes: 421, image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop' },
    { id: 7, category: 'portrait', gender: 'male', title: 'Golden Hour', likes: 198, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop' },
    { id: 8, category: 'editorial', gender: 'female', title: 'Harper\'s Bazaar', likes: 367, image: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=800&auto=format&fit=crop' },
    { id: 9, category: 'fashion', gender: 'male', title: 'Urban Street Style', likes: 324, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop' },
    { id: 10, category: 'portrait', gender: 'male', title: 'Executive Profile', likes: 287, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop' },
    { id: 11, category: 'commercial', gender: 'female', title: 'Luxury Brand', likes: 412, image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&auto=format&fit=crop' },
    { id: 12, category: 'art', gender: 'male', title: 'Monochromatic', likes: 356, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop' },
  ];

  // UPDATED: Mixed featured images with male and female models
  const featuredImages = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop', // Female

    'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=1200&auto=format&fit=crop'  // Female
  ];

  // UPDATED: Mixed reels with male and female models
  const reels = [
    { id: 1, title: 'Behind The Scenes Paris', views: '1.2M', likes: '45K', thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop', gender: 'female' },
    { id: 2, title: 'Mens Fashion Week Milan', views: '890K', likes: '32K', thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop', gender: 'male' },
    { id: 3, title: 'Makeup Transformation', views: '2.1M', likes: '78K', thumbnail: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop', gender: 'female' },
    { id: 4, title: 'Grooming Session', views: '1.5M', likes: '56K', thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop', gender: 'male' },
    { id: 5, title: 'Studio Photoshoot', views: '980K', likes: '41K', thumbnail: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&auto=format&fit=crop', gender: 'female' },
    { id: 6, title: 'Fitness Routine', views: '1.8M', likes: '67K', thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop', gender: 'male' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : selectedCategory === 'male' || selectedCategory === 'female'
    ? galleryItems.filter(item => item.gender === selectedCategory)
    : galleryItems.filter(item => item.category === selectedCategory);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setScaleLevel(1.15);
    
    setTimeout(() => {
      setCurrentSlide((prev) => {
        const next = prev === featuredImages.length - 1 ? 0 : prev + 1;
        return next;
      });
      
      setTimeout(() => {
        setScaleLevel(1.1);
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setScaleLevel(1.15);
    
    setTimeout(() => {
      setCurrentSlide((prev) => {
        const next = prev === 0 ? featuredImages.length - 1 : prev - 1;
        return next;
      });
      
      setTimeout(() => {
        setScaleLevel(1.1);
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setScaleLevel(1.15);
    
    setTimeout(() => {
      setCurrentSlide(index);
      
      setTimeout(() => {
        setScaleLevel(1.1);
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  return (
    <div className="min-h-screen min-w-screen bg-black text-white flex flex-col">
      {/* Fixed Navbar - Centered */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                MODELLE
              </span>
            </div>

            {/* Centered Desktop Navigation */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1 bg-gray-900/80 rounded-lg p-2 backdrop-blur-sm">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-5 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300 group"
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span className="font-medium text-sm tracking-wide">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - Social & Search */}
            <div className="hidden md:flex items-center">
              <button className="p-2 hover:bg-gray-800 rounded-sm transition-colors">
                <FaSearch className="w-5 h-5 mr-5" />
              </button>
            
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-2 rounded-sm font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 hover:bg-gray-800 rounded-full"
            >
              {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
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
                    <span className="mr-3">{item.icon}</span>
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

      {/* Main content - This will grow to fill space */}
      <main className="flex-grow pt-20">
        {/* Hero Section - SCALED BANNER */}
        <section id="home" className="pt-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Featured Image Slider */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden mb-12">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={featuredImages[currentSlide]}
                  alt={`Banner ${currentSlide + 1}`}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out`}
                  style={{
                    transform: `scale(${scaleLevel})`,
                    filter: isTransitioning ? 'brightness(0.9)' : 'brightness(1)'
                  }}
                  key={currentSlide}
                  onLoad={() => {
                    setTimeout(() => {
                      if (!isTransitioning) {
                        setScaleLevel(1.1);
                      }
                    }, 100);
                  }}
                  onError={(e) => {
                    console.error(`Image failed to load: ${featuredImages[currentSlide]}`);
                    e.target.onerror = null;
                    e.target.src = featuredImages[0];
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              <div className="hidden">
                {featuredImages.map((img, index) => (
                  <img 
                    key={`preload-${index}`}
                    src={img}
                    alt=""
                    onError={(e) => {
                      console.warn(`Failed to preload image ${index}`);
                      e.target.onerror = null;
                    }}
                  />
                ))}
              </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black p-5 rounded-full transition-colors z-50 cursor-pointer"
                disabled={isTransitioning}
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-7 h-7" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black p-5 rounded-full transition-colors z-50 cursor-pointer"
                disabled={isTransitioning}
                aria-label="Next slide"
              >
                <FaChevronRight className="w-7 h-7" />
              </button>
              
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
                {featuredImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-4 h-4 rounded-full transition-all cursor-pointer ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                    disabled={isTransitioning}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute bottom-0 left-18 right-0 p-12 z-40">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Visionary <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Artistry</span> in Every Frame
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    International modeling agency showcasing diverse talent from around the world.
                    Featuring both male and female models in fashion, editorial, and commercial work.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center cursor-pointer">
                      View Portfolio <FaArrowRight className="ml-3" />
                    </button>
                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors cursor-pointer">
                      Join Our Agency
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-gray-400">Talent Models</div>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-400">Global Clients</div>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">25</div>
                <div className="text-gray-400">Countries Represented</div>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">15★</div>
                <div className="text-gray-400">Industry Awards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
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

        {/* NEW: Male Models Spotlight Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Male <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Models</span> Spotlight
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Showcasing our top male talent in fashion, commercial, and editorial work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" 
                    alt="Male Model 1"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">Alex Morgan</h3>
                    <p className="text-gray-300 mb-3">Height: 6'2" | Age: 28</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Runway</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Commercial</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Fitness</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop" 
                    alt="Male Model 2"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">Marcus Chen</h3>
                    <p className="text-gray-300 mb-3">Height: 6'0" | Age: 25</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Editorial</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Streetwear</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Luxury</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop" 
                    alt="Male Model 3"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">David Rodriguez</h3>
                    <p className="text-gray-300 mb-3">Height: 6'1" | Age: 30</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Corporate</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Lifestyle</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Beauty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reels Section */}
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

        {/* About Section */}
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

        {/* NEW: Services Section */}
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

        {/* Testimonials Section */}
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
      </main>

      {/* Footer - Sticky to bottom with mt-auto */}
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
    </div>
  );
}

export default App;