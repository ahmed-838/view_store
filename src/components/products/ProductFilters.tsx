import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sliders } from 'lucide-react';

export function ProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const handlePriceChange = (min: string, max: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('minPrice', min);
    params.set('maxPrice', max);
    setSearchParams(params);
  };

  return (
    <div className="lg:block">
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <Sliders className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={(e) => handlePriceChange(e.target.value, searchParams.get('maxPrice') || '')}
              />
              <span>to</span>
              <input
                type="number"
                placeholder="Max"
                className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={(e) => handlePriceChange(searchParams.get('minPrice') || '', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}