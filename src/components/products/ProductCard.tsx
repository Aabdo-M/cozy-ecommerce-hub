
import { useState } from "react";
import { Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isInWishlistState, setIsInWishlistState] = useState(isInWishlist(product.id));

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlistToggle = () => {
    if (isInWishlistState) {
      removeFromWishlist(product.id);
      setIsInWishlistState(false);
    } else {
      addToWishlist(product);
      setIsInWishlistState(true);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-64 object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
        }}
      />
      <div className="px-6 py-4">
        <div className="text-green-500 text-xs mb-1">{product.category}</div>
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">{product.price} {product.currency}</span>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{product.rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button onClick={handleWishlistToggle}>
            <Heart 
              className={`h-6 w-6 ${isInWishlistState ? 'text-red-500 fill-red-500' : 'text-gray-700'} hover:text-red-500`} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
