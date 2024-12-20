import { useState, useEffect } from 'react';
import type { Product } from '../types';
import { mockProducts } from '../data/mockProducts';

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        // Use mock data for now
        const filteredProducts = category
          ? mockProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
          : mockProducts;
        setProducts(filteredProducts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return { products, isLoading, error };
}