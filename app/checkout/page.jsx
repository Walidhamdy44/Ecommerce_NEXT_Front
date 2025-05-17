"use client";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const { user } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: user?.emailAddresses[0]?.emailAddress || "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.attributes?.price || 0),
    0
  );
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const router = useRouter();

  const handleSubmit = (e) => {
    router.push("/success");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded-md"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.zipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition mt-6"
            >
              Place Order (${total.toFixed(2)})
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4 py-4 border-b">
                  <Image
                    src={item.attributes?.coverImg?.data?.attributes?.url}
                    alt={item.attributes?.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.attributes?.title}</h3>
                    <p className="text-sm text-gray-500">
                      {item.attributes?.category}
                    </p>
                    <p className="font-bold mt-1">${item.attributes?.price}</p>
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/cart">
              <button className="w-full border border-primary text-primary py-3 rounded-lg hover:bg-primary/10 transition">
                Back to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
