"use client";
import { Navigation, Footer, Button, Input, useCart } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SHIPPING = 50;
const VAT_RATE = 0.2;

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "e-Money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState<any>({});

  const vat = Math.round(total * VAT_RATE);
  const grandTotal = total + SHIPPING;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (value: string) => {
    setForm({ ...form, payment: value });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!form.name) newErrors.name = "Required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Wrong format";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.address) newErrors.address = "Required";
    if (!form.zip) newErrors.zip = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.country) newErrors.country = "Required";
    if (form.payment === "e-Money") {
      if (!form.eMoneyNumber) newErrors.eMoneyNumber = "Required";
      if (!form.eMoneyPin) newErrors.eMoneyPin = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Order placed!");
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <Link href="/" className="text-gray-500 hover:text-primary-500 text-sm mb-8 inline-block">
          Go Back
        </Link>
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-10">
            <h1 className="text-2xl lg:text-3xl font-bold uppercase mb-8">Checkout</h1>
            {/* Billing Details */}
            <div>
              <h2 className="text-sm font-bold text-primary-500 uppercase mb-4">Billing Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} autoComplete="name" />
                <Input label="Email Address" name="email" value={form.email} onChange={handleChange} error={errors.email} autoComplete="email" />
                <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} autoComplete="tel" />
              </div>
            </div>
            {/* Shipping Info */}
            <div>
              <h2 className="text-sm font-bold text-primary-500 uppercase mb-4">Shipping Info</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Your Address" name="address" value={form.address} onChange={handleChange} error={errors.address} autoComplete="street-address" className="md:col-span-2" />
                <Input label="ZIP Code" name="zip" value={form.zip} onChange={handleChange} error={errors.zip} autoComplete="postal-code" />
                <Input label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} autoComplete="address-level2" />
                <Input label="Country" name="country" value={form.country} onChange={handleChange} error={errors.country} autoComplete="country" />
              </div>
            </div>
            {/* Payment Details */}
            <div>
              <h2 className="text-sm font-bold text-primary-500 uppercase mb-4">Payment Details</h2>
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <span className="font-medium text-gray-700 mb-2 md:mb-0 md:w-1/3">Payment Method</span>
                <div className="flex flex-col gap-4 md:w-2/3">
                  <button
                    type="button"
                    className={`border rounded-lg px-4 py-3 flex items-center gap-3 ${form.payment === "e-Money" ? "border-primary-500" : "border-gray-300"}`}
                    onClick={() => handlePaymentChange("e-Money")}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${form.payment === "e-Money" ? "border-primary-500" : "border-gray-300"}`}>
                      {form.payment === "e-Money" && <span className="w-2 h-2 bg-primary-500 rounded-full block" />}
                    </span>
                    e-Money
                  </button>
                  <button
                    type="button"
                    className={`border rounded-lg px-4 py-3 flex items-center gap-3 ${form.payment === "Cash on Delivery" ? "border-primary-500" : "border-gray-300"}`}
                    onClick={() => handlePaymentChange("Cash on Delivery")}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${form.payment === "Cash on Delivery" ? "border-primary-500" : "border-gray-300"}`}>
                      {form.payment === "Cash on Delivery" && <span className="w-2 h-2 bg-primary-500 rounded-full block" />}
                    </span>
                    Cash on Delivery
                  </button>
                </div>
              </div>
              {form.payment === "e-Money" && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Input label="e-Money Number" name="eMoneyNumber" value={form.eMoneyNumber} onChange={handleChange} error={errors.eMoneyNumber} />
                  <Input label="e-Money PIN" name="eMoneyPin" value={form.eMoneyPin} onChange={handleChange} error={errors.eMoneyPin} />
                </div>
              )}
              {form.payment === "Cash on Delivery" && (
                <div className="flex items-center gap-4 mt-6 text-gray-700">
                  <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" />
                  </svg>
                  <span>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</span>
                </div>
              )}
            </div>
          </div>
          {/* Summary Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 h-fit">
            <h2 className="text-lg font-bold uppercase mb-6">Summary</h2>
            <div className="space-y-6 mb-6">
              {items.map((item) => (
                <div key={item.slug} className="flex items-center gap-4">
                  <div className="bg-neutral-100 rounded-lg w-16 h-16 flex items-center justify-center">
                    <Image src={item.image} alt={item.name} width={48} height={48} className="object-contain rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm uppercase leading-tight">{item.name}</div>
                    <div className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</div>
                  </div>
                  <span className="text-gray-400 font-bold">x{item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 uppercase tracking-wider">Total</span>
                <span className="text-lg font-bold">$ {total.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 uppercase tracking-wider">Shipping</span>
                <span className="text-lg font-bold">$ {SHIPPING.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 uppercase tracking-wider">VAT (Included)</span>
                <span className="text-lg font-bold">$ {vat.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 uppercase tracking-wider">Grand Total</span>
                <span className="text-lg font-bold text-primary-500">$ {grandTotal.toLocaleString()}</span>
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full py-4 text-base font-bold uppercase tracking-wider rounded-0">
              Continue & Pay
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
} 