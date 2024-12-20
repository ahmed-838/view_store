import { Link } from 'react-router-dom';
import { ShoppingCart, User, Heart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              View
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/category/formal" className="text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium">
                Formal
              </Link>
              <Link to="/category/casual" className="text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium">
                Casual
              </Link>
              <Link to="/category/outerwear" className="text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium">
                Outerwear
              </Link>
              <Link to="/category/innerwear" className="text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium">
                Innerwear
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="text-gray-900 hover:text-gray-500">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-900 hover:text-gray-500">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/account" className="text-gray-900 hover:text-gray-500">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}