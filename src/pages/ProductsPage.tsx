import { useParams } from 'react-router-dom';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/products/ProductFilters';
import { useProducts } from '../hooks/useProducts';

export function ProductsPage() {
  const { category } = useParams();
  const { products, isLoading, error } = useProducts(category);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold capitalize mb-8">{category || 'All Products'}</h1>
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <ProductFilters />
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}