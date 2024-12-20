import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/products/Breadcrumb';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductInfo } from '../components/products/ProductInfo';
import { ProductSpecs } from '../components/products/ProductSpecs';
import { ProductReviews } from '../components/products/ProductReviews.tsx';
import { RelatedProducts } from '../components/products/RelatedProducts.tsx';
import { useProduct } from '../hooks/useProduct';
import { useCart } from '../hooks/useCart';

export function ProductDetailsPage() {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addToCart } = useCart();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb category={product.category} name={product.name} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      <ProductSpecs product={product} />
      <ProductReviews productId={product.id} />
      <RelatedProducts category={product.category} currentProductId={product.id} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}