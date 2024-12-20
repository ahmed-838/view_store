interface ProductReviewsProps {
  productId: string;
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {/* TODO: Implement reviews functionality */}
      <p>Reviews coming soon for product {productId}</p>
    </section>
  );
}
