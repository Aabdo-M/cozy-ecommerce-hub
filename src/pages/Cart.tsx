
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import CartItemComponent from "@/components/cart/CartItem";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, totalItems, totalPrice } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Cart Shop</h1>
        
        {items.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between mb-6">
              <h2 className="text-lg font-bold">Total price: {totalPrice.toFixed(2)} EGP</h2>
              <h2 className="text-lg font-bold">Total number of items: {totalItems}</h2>
            </div>

            <div className="divide-y">
              {items.map((item) => (
                <CartItemComponent key={item.product.id} item={item} />
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Link 
                to="/checkout" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
              >
                Check Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <svg 
              className="mx-auto h-16 w-16 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
            <p className="mt-2 text-gray-500">Looks like you haven't added any products to your cart yet.</p>
            <div className="mt-6">
              <Link 
                to="/products" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
