import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  category: string;
  name: string;
}

export function Breadcrumb({ category, name }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-8">
      <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
      <ChevronRight className="h-4 w-4 text-gray-400" />
      <Link to={`/category/${category}`} className="text-gray-500 hover:text-gray-900 capitalize">{category}</Link>
      <ChevronRight className="h-4 w-4 text-gray-400" />
      <span className="text-gray-900">{name}</span>
    </nav>
  );
}