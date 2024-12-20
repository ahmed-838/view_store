interface RelatedProductsProps {
  category: string;
  currentProductId: string;
}

export function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {    
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      {/* TODO: Implement related products functionality */}
      <p>Related products in {category} coming soon (excluding product {currentProductId})</p>
    </section>
  );
}
