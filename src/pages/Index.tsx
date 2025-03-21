
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VideoGrid from '../components/VideoGrid';
import CategoryTag from '../components/CategoryTag';
import Footer from '../components/Footer';

const popularCategories = [
  { name: "Music", slug: "music" },
  { name: "Gaming", slug: "gaming" },
  { name: "Education", slug: "education" },
  { name: "Science", slug: "science" },
  { name: "Sports", slug: "sports" },
  { name: "Travel", slug: "travel" },
  { name: "Food", slug: "food" },
  { name: "Tech", slug: "tech" },
  { name: "Fashion", slug: "fashion" },
  { name: "Art", slug: "art" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="vh-container py-4">
          <HeroSection />
          
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold">Popular Categories</h2>
              <a href="/categories" className="text-videohub-orange hover:underline text-sm">
                View All
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((category, index) => (
                <CategoryTag 
                  key={index} 
                  name={category.name} 
                  slug={category.slug} 
                />
              ))}
            </div>
          </div>
          
          <VideoGrid title="Recommended for You" />
          
          <div className="mt-10 p-6 rounded-xl bg-videohub-gray/50 backdrop-blur-sm border border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Join Our Creator Community</h2>
                <p className="text-gray-300 max-w-md">
                  Share your videos with millions of users and build your audience. Start creating today!
                </p>
              </div>
              <button className="btn-primary w-full md:w-auto">
                Become a Creator
              </button>
            </div>
          </div>
          
          <VideoGrid title="Trending Now" />
          <VideoGrid title="Recently Uploaded" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
