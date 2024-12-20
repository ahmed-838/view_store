import { useState, useEffect } from 'react';
import { mockProducts } from '../data/mockProducts';
import type { Product } from '../types';

export function useProduct(id?: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setError(new Error('Product ID is required'));
      setIsLoading(false);
      return;
    }

    // Simulate API call with mock data
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError(new Error('Product not found'));
    }
    setIsLoading(false);
  }, [id]);

  return { product, isLoading, error };
}