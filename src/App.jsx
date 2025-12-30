import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import MaleModelsSection from './components/MaleModelSection';
import ReelsSection from './components/ReelSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServiceSection';
import TestimonialsSection from './components/TestimonialSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigation = [
    { name: 'Home', href: '#home', icon: 'FaHome' },
    { name: 'Gallery', href: '#gallery', icon: 'FaImages' },
    { name: 'About', href: '#about', icon: 'FaUser' },
    { name: 'Reels', href: '#reels', icon: 'FaVideo' },
    { name: 'Shop', href: '#shop', icon: 'FaShoppingBag' },
    { name: 'Contact', href: '#contact', icon: 'FaEnvelope' },
  ];

  const categories = ['All', 'Fashion', 'Portrait', 'Editorial', 'Commercial', 'Art', 'Male', 'Female'];

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

  const featuredImages = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=1200&auto=format&fit=crop'
  ];

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

  return (
    <div className="min-h-screen min-w-screen bg-black text-white flex flex-col">
      <Navbar 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />

      <main className="flex-grow pt-20">
        <HeroSection featuredImages={featuredImages} />
        
        <GallerySection 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          filteredItems={filteredItems}
        />
        
        <MaleModelsSection />
        
        <ReelsSection reels={reels} />
        
        <AboutSection />
        
        <ServicesSection />
        
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;