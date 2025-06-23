"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
  const { items, updateQuantity, clearCart, total } = useCart();
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [open, shouldRender]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center md:items-start md:justify-end bg-black/50 transition-all duration-300 ease-out ${
        isClosing ? 'bg-opacity-0' : 'bg-opacity-50'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-xl shadow-xl w-full max-w-md mx-auto md:mx-0 p-6 relative md:mr-20 mt-28 transform transition-all duration-300 ease-out ${
          isClosing 
            ? 'translate-y-4 opacity-0 scale-95' 
            : 'translate-y-0 opacity-100 scale-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between mb-6 transform transition-all duration-300 ${
          isClosing ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          <h2 className="text-xl font-bold tracking-widest uppercase">
            Cart ({items.length})
          </h2>
          <button
            className="text-gray-500 hover:text-primary-500 text-sm transition-colors duration-200 hover:underline"
            onClick={clearCart}
          >
            Remove all
          </button>
        </div>
        <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center text-gray-400 animate-pulse">Your cart is empty.</div>
          ) : (
            items.map((item, index) => (
              <div 
                key={item.slug} 
                className={`flex items-center gap-4 transform transition-all duration-300 hover:scale-[1.02] ${
                  isClosing ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
                }`}
                style={{ 
                  transitionDelay: isClosing ? '0ms' : `${index * 50}ms` 
                }}
              >
                <div className="bg-neutral-100 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm uppercase leading-tight">
                    {item.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    $ {item.price.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-neutral-100 rounded transition-all duration-200 hover:bg-neutral-200">
                  <button
                    className="px-2 py-1 text-gray-400 hover:text-primary-500 text-lg transition-all duration-200 hover:scale-110 active:scale-95"
                    onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-2 w-6 text-center select-none transition-all duration-200">
                    {item.quantity}
                  </span>
                  <button
                    className="px-2 py-1 text-gray-400 hover:text-primary-500 text-lg transition-all duration-200 hover:scale-110 active:scale-95"
                    onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className={`flex items-center justify-between mb-6 transform transition-all duration-300 delay-200 ${
          isClosing ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          <span className="text-gray-500 uppercase tracking-wider">Total</span>
          <span className="text-xl font-bold">$ {total.toLocaleString()}</span>
        </div>
        <button
          className="w-full btn btn-primary py-4 text-base font-bold uppercase tracking-wider rounded transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          disabled={items.length === 0}
          onClick={() => {
            handleClose();
            setTimeout(() => router.push("/checkout"), 300);
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
