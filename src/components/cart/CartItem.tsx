
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart, CartItem } from "@/contexts/CartContext";

type CartItemProps = {
  item: CartItem;
};

const CartItemComponent = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
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
          <p className="mt-1 text-sm text-gray-500">{product.price} {product.currency}</p>
          <button 
            onClick={handleRemove}
            className="mt-2 flex items-center text-sm text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            <span>Remove</span>
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex border border-gray-300 rounded">
          <button 
            onClick={handleDecrease}
            className="px-3 py-1 border-r border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 py-1 text-center">{quantity}</span>
          <button 
            onClick={handleIncrease}
            className="px-3 py-1 border-l border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="ml-6 text-right">
          <p className="text-lg font-medium text-gray-900">
            {(product.price * quantity).toFixed(2)} {product.currency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
