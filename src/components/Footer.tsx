
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-videohub-gray mt-16 pt-10 pb-6">
      <div className="vh-container">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About VideoHub</h3>
            <p className="text-gray-400 text-sm mb-4">
              VideoHub is the premier platform for sharing and discovering videos from around the world. 
              Join our community of creators and viewers today.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-videohub-orange transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-videohub-orange transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-videohub-orange transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-videohub-orange transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          
          {/* Categories column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/trending" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Trending Videos
                </Link>
              </li>
              <li>
                <Link to="/categories/music" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/categories/gaming" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Gaming
                </Link>
              </li>
              <li>
                <Link to="/categories/education" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/categories/science" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Science & Tech
                </Link>
              </li>
              <li>
                <Link to="/categories/entertainment" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Advertise with Us
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-videohub-orange transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="text-videohub-orange mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">support@videohub.com</span>
              </li>
              <li className="flex items-start">
                <Globe size={16} className="text-videohub-orange mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">www.videohub.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-black/30 text-sm rounded-l-md px-3 py-2 w-full border-r-0 border border-gray-700 focus:outline-none focus:border-videohub-orange" 
                />
                <button className="bg-videohub-orange hover:bg-amber-600 transition-colors text-white px-3 py-2 text-sm rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} VideoHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
