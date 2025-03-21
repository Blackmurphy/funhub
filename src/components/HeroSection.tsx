
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CategoryTag from './CategoryTag';

const featuredCategories = [
  { name: "Trending", slug: "trending" },
  { name: "Recently Added", slug: "recently-added" },
  { name: "Popular", slug: "popular" },
  { name: "Top Rated", slug: "top-rated" },
  { name: "Most Viewed", slug: "most-viewed" },
];

const featuredVideos = [
  {
    id: "featured1",
    title: "Ultimate Guide to Landscape Photography",
    thumbnail: "https://images.unsplash.com/photo-1500534623283-312aebe2edc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Learn the secrets of capturing breathtaking landscape photos with professional techniques and tips.",
    creator: "Nature Lens",
    duration: "32:45"
  },
  {
    id: "featured2",
    title: "Modern Home Design Trends 2023",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Explore the latest trends in home design and interior decoration that are shaping modern living spaces.",
    creator: "Design Interiors",
    duration: "25:18"
  },
  {
    id: "featured3",
    title: "Healthy Meal Prep for the Week",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Learn how to prepare nutritious and delicious meals for the entire week in just a few hours.",
    creator: "Healthy Chef",
    duration: "28:32"
  }
];

const HeroSection = () => {
  const [currentFeatured, setCurrentFeatured] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredVideos.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const currentVideo = featuredVideos[currentFeatured];

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Featured video background */}
      <div 
        className="relative h-[30vh] md:h-[60vh] bg-cover bg-center video-transition"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(14,14,14,0.9)), url(${currentVideo.thumbnail})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="vh-container flex flex-col items-start justify-end h-full pb-8 md:pb-16">
            <div className="max-w-2xl animate-fade-up">
              <div className="mb-4 flex space-x-2">
                {featuredCategories.map((category, index) => (
                  <CategoryTag 
                    key={index} 
                    name={category.name} 
                    slug={category.slug} 
                    className={index === currentFeatured ? "bg-videohub-orange" : ""}
                  />
                ))}
              </div>
              
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
                {currentVideo.title}
              </h1>
              
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                {currentVideo.description}
              </p>
              
              <div className="flex items-center space-x-4">
                <Button className="bg-videohub-orange hover:bg-amber-600 flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Now
                </Button>
                <div className="text-sm text-gray-300">
                  By <span className="text-white">{currentVideo.creator}</span> • {currentVideo.duration}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {featuredVideos.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentFeatured(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentFeatured 
                ? 'bg-videohub-orange w-6' 
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
            aria-label={`Go to featured video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
