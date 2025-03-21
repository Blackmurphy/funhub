
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye, ThumbsUp } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  likes: number;
  creator: {
    name: string;
    avatar?: string;
  };
  uploadedAt: string;
  categories?: Array<{name: string, slug: string}>;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  duration,
  views,
  likes,
  creator,
  uploadedAt,
  categories
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format views (e.g., 1.5K, 2.3M)
  const formatViews = (viewCount: number) => {
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(1)}M`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(1)}K`;
    }
    return viewCount.toString();
  };

  return (
    <div 
      className="video-card-hover rounded-lg overflow-hidden bg-videohub-gray"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/video/${id}`}>
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
          
          {/* Play overlay on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-videohub-orange/80 flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
          
          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>
      </Link>
      
      <div className="p-3">
        <Link to={`/video/${id}`}>
          <h3 className="font-medium line-clamp-2 hover:text-videohub-orange transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center text-gray-400 text-sm">
          <Link to={`/creator/${creator.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-videohub-orange">
            {creator.name}
          </Link>
        </div>
        
        <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="flex items-center">
              <Eye className="h-3 w-3 mr-1" />
              {formatViews(views)}
            </span>
            <span className="flex items-center">
              <ThumbsUp className="h-3 w-3 mr-1" />
              {formatViews(likes)}
            </span>
          </div>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {uploadedAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
