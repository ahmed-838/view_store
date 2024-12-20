import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import CartPage from './pages/cartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AccountPage } from './pages/AccountPage';
import { WishlistPage } from './pages/WishlistPage';
import { CartProvider } from './context/CartProvider';
import { OuterwearPage } from './pages/OuterwearPage';
import { InnerwearPage } from './pages/InnerwearPage';
import { WishlistProvider } from './context/WishlistProvider';

export function App() {
  return (
    <Router>
      <WishlistProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/category/:category" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/outerwear" element={<OuterwearPage />} />
                <Route path="/innerwear" element={<InnerwearPage />} />
              </Routes>
            </main>
          </div>
        </CartProvider>
      </WishlistProvider>
    </Router>
  );
}