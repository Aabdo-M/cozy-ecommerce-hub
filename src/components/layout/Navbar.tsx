
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <span className="text-green-500 text-2xl font-bold">
            <ShoppingCart className="inline-block mr-2" />
            fresh cart
          </span>
        </Link>
        
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-green-500">Home</Link>
          <Link to="/cart" className="text-gray-700 hover:text-green-500">Cart</Link>
          <Link to="/wishlist" className="text-gray-700 hover:text-green-500">Wish List</Link>
          <Link to="/products" className="text-gray-700 hover:text-green-500">Products</Link>
          <Link to="/categories" className="text-gray-700 hover:text-green-500">Categories</Link>
          <Link to="/brands" className="text-gray-700 hover:text-green-500">Brands</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-green-500" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <Link to="/wishlist">
            <Heart className="h-6 w-6 text-gray-700 hover:text-green-500" />
          </Link>
          
          {isAuthenticated ? (
            <button 
              onClick={logout} 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Log Out
            </button>
          ) : (
            <div className="space-x-2">
              <Link 
                to="/login" 
                className="text-green-500 hover:text-green-700"
              >
                Log In
              </Link>
              <Link 
                to="/register" 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
