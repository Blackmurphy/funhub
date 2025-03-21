
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ThumbsUp, ThumbsDown, Share, Download, Bookmark, 
  MessageSquare, Flag, MoreHorizontal, Play, Pause, Volume2, VolumeX,
  Maximize, ChevronLeft, ChevronRight
} from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoGrid from '../components/VideoGrid';
import CategoryTag from '../components/CategoryTag';

// Mock data for a single video
const videoData = {
  id: "1",
  title: "Ultimate Productivity Tips for Work From Home",
  description: "Working from home has become the new normal for many people. In this video, I share my top productivity tips to help you stay focused, organized, and efficient while working remotely. You'll learn how to set up your workspace, establish a routine, avoid distractions, and maintain a healthy work-life balance.",
  videoUrl: "https://www.example.com/videos/productivity-tips.mp4", // This would be a real video URL in production
  thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  views: 1250000,
  likes: 87500,
  dislikes: 1200,
  shares: 15000,
  uploadedAt: "2023-06-15T14:30:00Z",
  duration: "18:42",
  creator: {
    id: "creator1",
    name: "Productivity Pro",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    subscribers: 1200000
  },
  categories: [
    { name: "Productivity", slug: "productivity" },
    { name: "Work", slug: "work" },
    { name: "Lifestyle", slug: "lifestyle" }
  ],
  comments: [
    {
      id: "comment1",
      user: {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      text: "These tips completely changed my work-from-home routine! Thanks for sharing!",
      likes: 342,
      time: "2 weeks ago",
      replies: [
        {
          id: "reply1",
          user: {
            name: "Productivity Pro",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          text: "So glad to hear that, Alex! What tip worked best for you?",
          likes: 56,
          time: "2 weeks ago"
        }
      ]
    },
    {
      id: "comment2",
      user: {
        name: "Sarah Miller",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      text: "I've been struggling with staying focused while working from home. These tips are exactly what I needed!",
      likes: 128,
      time: "1 week ago",
      replies: []
    },
    {
      id: "comment3",
      user: {
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      text: "Great video! I would add that having a dedicated workspace that you only use for work really helps with mental separation between work and personal life.",
      likes: 89,
      time: "5 days ago",
      replies: []
    }
  ]
};

// Format views, likes, etc. (e.g., 1.5K, 2.3M)
const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

// Format date (e.g., "June 15, 2023")
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Video = () => {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showAllDescription, setShowAllDescription] = useState(false);
  
  useEffect(() => {
    // In a real app, fetch the video data based on the ID
    console.log(`Fetching video data for ID: ${id}`);
    // For demo purposes, we're using the mock data
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control the actual video playback
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    // In a real implementation, this would control the actual video volume
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // In a real implementation, this would toggle fullscreen mode
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the comment to the backend
    console.log("Submitting comment:", commentText);
    setCommentText('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="vh-container py-4">
          {/* Video Player */}
          <div className="relative bg-black rounded-lg overflow-hidden">
            <AspectRatio ratio={16/9}>
              {/* This would be a real video player in production */}
              <div 
                className="w-full h-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${videoData.thumbnail})` }}
              >
                {!isPlaying && (
                  <button
                    onClick={handlePlay}
                    className="w-20 h-20 rounded-full bg-videohub-orange/80 flex items-center justify-center hover:bg-videohub-orange transition-colors"
                  >
                    <Play className="h-10 w-10 text-white" />
                  </button>
                )}
              </div>
            </AspectRatio>
            
            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center">
              <button 
                onClick={handlePlay} 
                className="text-white mr-4"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              
              <div className="text-white text-sm mr-4">
                <span>00:00</span>
                <span> / </span>
                <span>{videoData.duration}</span>
              </div>
              
              <div className="flex-grow h-1 bg-gray-600 rounded-full overflow-hidden mr-4">
                <div className="h-full bg-videohub-orange w-1/3" />
              </div>
              
              <button 
                onClick={handleMute} 
                className="text-white mr-4"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </button>
              
              <button 
                onClick={handleFullscreen} 
                className="text-white"
                aria-label="Fullscreen"
              >
                <Maximize className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="mt-4">
            <h1 className="text-xl md:text-2xl font-bold">{videoData.title}</h1>
            
            <div className="flex flex-wrap justify-between items-center mt-3">
              <div className="flex items-center text-sm text-gray-400">
                <span>{formatNumber(videoData.views)} views</span>
                <span className="mx-2">•</span>
                <span>{formatDate(videoData.uploadedAt)}</span>
              </div>
              
              <div className="flex items-center mt-3 sm:mt-0 space-x-2 sm:space-x-4">
                <Button 
                  variant="ghost" 
                  className="flex items-center text-gray-300 hover:text-videohub-orange"
                >
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>{formatNumber(videoData.likes)}</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="flex items-center text-gray-300 hover:text-videohub-orange"
                >
                  <ThumbsDown className="h-5 w-5 mr-1" />
                  <span>{formatNumber(videoData.dislikes)}</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="flex items-center text-gray-300 hover:text-videohub-orange"
                >
                  <Share className="h-5 w-5 mr-1" />
                  <span>Share</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="flex items-center text-gray-300 hover:text-videohub-orange"
                >
                  <Download className="h-5 w-5 mr-1" />
                  <span>Download</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="flex items-center text-gray-300 hover:text-videohub-orange"
                >
                  <Bookmark className="h-5 w-5 mr-1" />
                  <span>Save</span>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-videohub-gray border-gray-700">
                    <DropdownMenuItem className="text-gray-300 hover:text-white focus:text-white cursor-pointer">
                      <Flag className="h-4 w-4 mr-2" />
                      <span>Report</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 hover:text-white focus:text-white cursor-pointer">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      <span>Send Feedback</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          
          <Separator className="my-4 bg-gray-800" />
          
          {/* Creator Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2">
            <div className="flex items-center">
              <img 
                src={videoData.creator.avatar} 
                alt={videoData.creator.name} 
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <Link to={`/creator/${videoData.creator.id}`} className="font-semibold text-lg hover:text-videohub-orange">
                  {videoData.creator.name}
                </Link>
                <div className="text-sm text-gray-400">
                  {formatNumber(videoData.creator.subscribers)} subscribers
                </div>
              </div>
            </div>
            
            <Button 
              className={`mt-4 sm:mt-0 ${isSubscribed ? 'bg-gray-700 hover:bg-gray-600' : 'bg-videohub-orange hover:bg-amber-600'}`}
              onClick={handleSubscribe}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </div>
          
          {/* Video Description */}
          <div className="mt-6 bg-videohub-gray/50 rounded-lg p-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {videoData.categories.map((category, index) => (
                <CategoryTag key={index} name={category.name} slug={category.slug} />
              ))}
            </div>
            
            <div className="text-gray-300">
              <p className={showAllDescription ? '' : 'line-clamp-3'}>
                {videoData.description}
              </p>
              {videoData.description.length > 180 && (
                <button 
                  className="mt-2 text-videohub-orange hover:underline text-sm"
                  onClick={() => setShowAllDescription(!showAllDescription)}
                >
                  {showAllDescription ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">
              {videoData.comments.length} Comments
            </h2>
            
            {/* Comment form */}
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <div className="flex space-x-3">
                <img 
                  src="https://randomuser.me/api/portraits/men/40.jpg" 
                  alt="Your avatar" 
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-grow">
                  <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full bg-transparent border-b border-gray-700 focus:border-videohub-orange pb-2 focus:outline-none"
                  />
                  
                  <div className="flex justify-end mt-2 space-x-2">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      onClick={() => setCommentText('')}
                      className="text-sm"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-videohub-orange hover:bg-amber-600 text-sm"
                      disabled={!commentText.trim()}
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* Comments list */}
            <div className="space-y-6">
              {videoData.comments.map(comment => (
                <div key={comment.id} className="bg-videohub-gray/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <img 
                      src={comment.user.avatar} 
                      alt={comment.user.name} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <span className="font-semibold">{comment.user.name}</span>
                        <span className="ml-2 text-xs text-gray-400">{comment.time}</span>
                      </div>
                      <p className="mt-1 text-gray-300">{comment.text}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <button className="flex items-center text-gray-400 hover:text-videohub-orange text-sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-videohub-orange text-sm">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                        </button>
                        <button className="text-gray-400 hover:text-videohub-orange text-sm">
                          Reply
                        </button>
                      </div>
                      
                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 ml-4 space-y-4">
                          {comment.replies.map(reply => (
                            <div key={reply.id} className="flex items-start">
                              <img 
                                src={reply.user.avatar} 
                                alt={reply.user.name} 
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <div>
                                <div className="flex items-center">
                                  <span className="font-semibold">{reply.user.name}</span>
                                  <span className="ml-2 text-xs text-gray-400">{reply.time}</span>
                                </div>
                                <p className="mt-1 text-gray-300">{reply.text}</p>
                                <div className="mt-2 flex items-center space-x-4">
                                  <button className="flex items-center text-gray-400 hover:text-videohub-orange text-sm">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    <span>{reply.likes}</span>
                                  </button>
                                  <button className="flex items-center text-gray-400 hover:text-videohub-orange text-sm">
                                    <ThumbsDown className="h-4 w-4 mr-1" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related Videos */}
          <VideoGrid title="You May Also Like" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Video;
