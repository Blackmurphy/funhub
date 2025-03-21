
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryTagProps {
  name: string;
  slug: string;
  className?: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ name, slug, className = '' }) => {
  return (
    <Link 
      to={`/categories/${slug}`}
      className={`inline-block px-3 py-1 rounded-full bg-videohub-gray hover:bg-videohub-orange transition-colors text-sm ${className}`}
    >
      {name}
    </Link>
  );
};

export default CategoryTag;
