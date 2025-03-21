
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Upload, Bell, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`py-3 transition-all duration-300 ${isScrolled ? 'navbar-sticky' : 'bg-videohub-black'}`}>
      <div className="vh-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="VideoHub" className="h-8" />
          </Link>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/videos" className="hover:text-videohub-orange transition-colors">
              Videos
            </Link>
            <Link to="/categories" className="hover:text-videohub-orange transition-colors">
              Categories
            </Link>
            <Link to="/creators" className="hover:text-videohub-orange transition-colors">
              Creators
            </Link>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search videos..." 
                className="input-search"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
          
          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-videohub-gray rounded-full">
              <Upload className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-videohub-gray rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="bg-videohub-orange hover:bg-amber-600 text-white">
              Sign In
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-videohub-gray rounded-lg p-4 animate-fade-in">
            <div className="flex mb-4">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search videos..." 
                  className="input-search"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/videos" 
                className="p-2 hover:bg-black/20 rounded hover:text-videohub-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </Link>
              <Link 
                to="/categories" 
                className="p-2 hover:bg-black/20 rounded hover:text-videohub-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/creators" 
                className="p-2 hover:bg-black/20 rounded hover:text-videohub-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Creators
              </Link>
              <div className="pt-2 flex justify-between border-t border-gray-700">
                <Button variant="ghost" className="flex items-center justify-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload
                </Button>
                <Button className="bg-videohub-orange hover:bg-amber-600 text-white">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
