
import React from 'react';
import VideoCard from './VideoCard';

// Sample data
const sampleVideos = [
  {
    id: "1",
    title: "How to Make the Perfect Coffee at Home",
    thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "12:35",
    views: 1540000,
    likes: 98000,
    creator: {
      name: "Coffee Master",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    uploadedAt: "2 days ago",
    categories: [{name: "Food", slug: "food"}, {name: "Lifestyle", slug: "lifestyle"}]
  },
  {
    id: "2",
    title: "10 Amazing Travel Destinations You Need to Visit in 2023",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "18:22",
    views: 879000,
    likes: 54000,
    creator: {
      name: "Travel Guru",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    uploadedAt: "1 week ago",
    categories: [{name: "Travel", slug: "travel"}, {name: "Adventure", slug: "adventure"}]
  },
  {
    id: "3",
    title: "Ultimate Home Workout - No Equipment Needed",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "25:14",
    views: 2450000,
    likes: 187000,
    creator: {
      name: "Fitness Pro",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    uploadedAt: "3 weeks ago",
    categories: [{name: "Fitness", slug: "fitness"}, {name: "Health", slug: "health"}]
  },
  {
    id: "4",
    title: "Learn Web Development in 30 Days - Complete Guide",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "42:18",
    views: 980000,
    likes: 76000,
    creator: {
      name: "Code Master",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    uploadedAt: "1 month ago",
    categories: [{name: "Programming", slug: "programming"}, {name: "Education", slug: "education"}]
  },
  {
    id: "5",
    title: "The Art of Photography - Beginner to Pro",
    thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "32:09",
    views: 720000,
    likes: 43000,
    creator: {
      name: "Photo Expert",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    uploadedAt: "2 months ago",
    categories: [{name: "Photography", slug: "photography"}, {name: "Arts", slug: "arts"}]
  },
  {
    id: "6",
    title: "5 Easy Cooking Recipes for Beginners",
    thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "15:45",
    views: 1230000,
    likes: 89000,
    creator: {
      name: "Chef Delight",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    uploadedAt: "3 months ago",
    categories: [{name: "Cooking", slug: "cooking"}, {name: "Food", slug: "food"}]
  },
  {
    id: "7",
    title: "Financial Freedom: How to Invest Wisely",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "28:51",
    views: 890000,
    likes: 67000,
    creator: {
      name: "Money Mentor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    uploadedAt: "4 months ago",
    categories: [{name: "Finance", slug: "finance"}, {name: "Education", slug: "education"}]
  },
  {
    id: "8",
    title: "DIY Home Decoration Ideas on a Budget",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    duration: "19:27",
    views: 650000,
    likes: 51000,
    creator: {
      name: "Home Stylist",
      avatar: "https://randomuser.me/api/portraits/women/54.jpg"
    },
    uploadedAt: "5 months ago",
    categories: [{name: "DIY", slug: "diy"}, {name: "Lifestyle", slug: "lifestyle"}]
  }
];

interface VideoGridProps {
  title?: string;
  videos?: Array<any>;
  columns?: number;
}

const VideoGrid: React.FC<VideoGridProps> = ({ 
  title = "Recommended Videos", 
  videos = sampleVideos,
  columns = 4
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <div className="mt-6">
      {title && <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>}
      <div className={`grid ${gridCols} gap-4 md:gap-6`}>
        {videos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
