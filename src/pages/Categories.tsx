
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Sample category data
const allCategories = [
  {
    id: "cat1",
    name: "Music",
    slug: "music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 15400,
  },
  {
    id: "cat2",
    name: "Gaming",
    slug: "gaming",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 12300,
  },
  {
    id: "cat3",
    name: "Sports",
    slug: "sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 9800,
  },
  {
    id: "cat4",
    name: "Education",
    slug: "education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 8500,
  },
  {
    id: "cat5",
    name: "Technology",
    slug: "technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 7200,
  },
  {
    id: "cat6",
    name: "Travel",
    slug: "travel",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 6900,
  },
  {
    id: "cat7",
    name: "Food",
    slug: "food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 6500,
  },
  {
    id: "cat8",
    name: "Comedy",
    slug: "comedy",
    image: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 5800,
  },
  {
    id: "cat9",
    name: "Art",
    slug: "art",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 5100,
  },
  {
    id: "cat10",
    name: "Fitness",
    slug: "fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 4800,
  },
  {
    id: "cat11",
    name: "Science",
    slug: "science",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 4500,
  },
  {
    id: "cat12",
    name: "Fashion",
    slug: "fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 4200,
  },
  {
    id: "cat13",
    name: "DIY",
    slug: "diy",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 3900,
  },
  {
    id: "cat14",
    name: "Nature",
    slug: "nature",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 3600,
  },
  {
    id: "cat15",
    name: "News",
    slug: "news",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 3300,
  },
  {
    id: "cat16",
    name: "Pets",
    slug: "pets",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    videoCount: 3000,
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter categories based on search term
  const filteredCategories = allCategories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Format video count (e.g., 1.5K, 2.3M)
  const formatVideoCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M videos`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K videos`;
    }
    return `${count} videos`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="vh-container py-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Explore Categories</h1>
          
          {/* Search bar */}
          <div className="max-w-md mb-8">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-search"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
          
          {/* Categories grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredCategories.map(category => (
              <Link 
                key={category.id}
                to={`/categories/${category.slug}`}
                className="block group"
              >
                <div className="bg-videohub-gray rounded-lg overflow-hidden hover-scale">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </AspectRatio>
                  
                  <div className="p-3">
                    <h3 className="font-semibold text-lg group-hover:text-videohub-orange transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {formatVideoCount(category.videoCount)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Empty state if no results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold mb-2">No categories found</h3>
              <p className="text-gray-400">Try a different search term</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
