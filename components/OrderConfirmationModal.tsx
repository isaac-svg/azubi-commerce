"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { CartItem } from "./CartContext";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  grandTotal: number;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
  items,
  grandTotal,
}) => {
  if (!isOpen) return null;

  const otherItemsCount = items.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
            <Image
              src="/assets/checkout/icon-order-confirmation.svg"
              alt="Order confirmed"
              width={64}
              height={64}
              className="text-white"
            />
          </div>
          <h2 className="text-2xl font-bold uppercase mb-4">
            Thank you
            <br />
            for your order
          </h2>
          <p className="text-gray-600 mb-6">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="bg-neutral-50 rounded-lg overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-200">
            {items.map((item)=> (
              <div className="flex items-center gap-4 py-1">
                <div className="bg-neutral-100 rounded-lg w-12 h-12 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={32}
                    height={32}
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
                <span className="text-gray-400 font-bold">
                  x{item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Other items count */}
          {otherItemsCount > 0 && (
            <div className="px-6 py-3 text-center text-gray-500 text-sm">
              and {otherItemsCount} other item{otherItemsCount > 1 ? "s" : ""}
            </div>
          )}

          {/* Grand total */}
          <div className="bg-neutral-900 text-white p-6">
            <div className="text-gray-300 text-sm uppercase tracking-wider mb-2">
              Grand Total
            </div>
            <div className="text-lg font-bold">
              $ {grandTotal.toLocaleString()}
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full py-4 text-base font-bold uppercase tracking-wider"
          onClick={onClose}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
