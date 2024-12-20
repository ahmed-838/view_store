import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';
import { formatPrice } from '../utils/format';
import { Heart, ShoppingCart } from 'lucide-react';

export function WishlistPage() {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { products } = useProducts();

  const wishlistProducts = products.filter(product => wishlistItems.includes(product.id));

  if (!wishlistProducts || wishlistProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
        <p className="text-gray-500">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlistProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4 bg-white">
            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg mb-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-lg font-medium text-gray-900">{formatPrice(product.price)}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="flex items-center justify-center p-2 border border-gray-200 rounded hover:bg-gray-50"
                  aria-label="Remove from wishlist"
                >
                  <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
