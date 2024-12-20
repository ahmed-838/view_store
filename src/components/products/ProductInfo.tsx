import { useState } from 'react';
import { Share2, Heart } from 'lucide-react';
import type { Product } from '../../types';
import { formatPrice } from '../../utils/format';
import { useWishlist } from '../../hooks/useWishlist';
import { useCart } from '../../hooks/useCart';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    console.log('ProductInfo: Adding to cart:', product);
    addToCart(product);
  };

  const handleWishlistClick = () => {
    console.log('ProductInfo: Toggling wishlist for:', product.id);
    toggleWishlist(product.id);
  };

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-xl text-gray-500 mt-2">{formatPrice(product.price)}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-medium text-gray-900">Size</h2>
        <div className="grid grid-cols-4 gap-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border rounded-md py-2 text-sm font-medium ${
                selectedSize === size
                  ? 'border-black text-black'
                  : 'border-gray-200 text-gray-900 hover:bg-gray-50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-medium text-gray-900">Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>

      <div className="space-y-4">
        <button
          className="w-full bg-black text-white py-3 px-8 rounded-md font-medium hover:bg-gray-900"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <div className="flex space-x-4">
          <button
            onClick={handleWishlistClick}
            className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 py-3 px-8 rounded-md font-medium hover:bg-gray-50"
          >
            <Heart className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
            <span>{isWishlisted ? 'Saved' : 'Save'}</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 py-3 px-8 rounded-md font-medium hover:bg-gray-50">
            <Share2 />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-gray-900">SKU</dt>
            <dd className="mt-1 text-sm text-gray-500">{product.id}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-900">Availability</dt>
            <dd className="mt-1 text-sm text-gray-500">
              {product.inventory > 0 ? `${product.inventory} in stock` : 'Out of stock'}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}