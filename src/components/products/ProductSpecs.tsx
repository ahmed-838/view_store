import type { Product } from '../../types';

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">{product.name} Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Premium materials</li>
            <li>Expert craftsmanship</li>
            <li>Timeless design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Care Instructions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dry clean only</li>
            <li>Store in a cool, dry place</li>
            <li>Follow care label instructions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}