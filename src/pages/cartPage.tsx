import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/format';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  console.log('Cart page items:', cartItems);  // Debug log

  const calculateTotal = () => {
    if (!cartItems || cartItems.length === 0) return '0.00';
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-gray-500">{formatPrice(item.price)} each</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-800"
        >
          Clear Cart
        </button>
        <div className="text-right">
          <p className="text-lg font-medium">Total: {formatPrice(Number(calculateTotal()))}</p>
          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            onClick={() => alert('Checkout functionality coming soon!')}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
