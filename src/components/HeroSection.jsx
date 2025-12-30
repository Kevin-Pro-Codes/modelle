import React, { useState, useEffect, useRef } from 'react';
import { 
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight
} from 'react-icons/fa';

const HeroSection = ({ featuredImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scaleLevel, setScaleLevel] = useState(1.1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const slideTimeoutRef = useRef(null);

  // Track window width for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate slides
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

  // Reset timer on slide change
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

  // Adjust height based on screen size
  const getHeroHeight = () => {
    if (windowWidth < 640) return 'h-[400px]'; // Mobile
    if (windowWidth < 1024) return 'h-[500px]'; // Tablet
    return 'h-[600px]'; // Desktop
  };

  return (
    <section id="home" className="pt-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Slider */}
        <div className={`relative ${getHeroHeight()} rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12`}>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
          
          {/* Preload images */}
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
          
          {/* Navigation Arrows - Hidden on small mobile, smaller on mobile */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black p-3 sm:p-5 rounded-full transition-colors z-50 cursor-pointer"
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-7 sm:h-7" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black p-3 sm:p-5 rounded-full transition-colors z-50 cursor-pointer"
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <FaChevronRight className="w-4 h-4 sm:w-7 sm:h-7" />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-50">
            {featuredImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full transition-all cursor-pointer ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                disabled={isTransitioning}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 z-40">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Visionary <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Artistry</span> in Every Frame
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8">
                International modeling agency showcasing diverse talent from around the world.
                Featuring both male and female models in fashion, editorial, and commercial work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center cursor-pointer text-sm sm:text-base">
                  <span>View Portfolio</span>
                  <FaArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="border-2 border-white/30 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white/10 transition-colors cursor-pointer text-sm sm:text-base">
                  Join Our Agency
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">250+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Talent Models</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Global Clients</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">25</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Countries</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">15★</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;