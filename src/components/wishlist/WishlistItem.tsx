
import { ShoppingCart, X } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";

type WishlistItemProps = {
  product: Product;
};

const WishlistItem = ({ product }: WishlistItemProps) => {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemove = () => {
    removeFromWishlist(product.id);
  };

  const handleAddToCart = () => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/100?text=Product";
            }}
          />
        </div>

        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <p className="mt-1 text-md font-medium">{product.price} {product.currency}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{product.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={handleAddToCart}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          <span>Add to Cart</span>
        </button>
        <button 
          onClick={handleRemove}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
