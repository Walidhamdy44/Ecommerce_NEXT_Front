"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Bounce, Fade } from "react-awesome-reveal";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
      <div className="text-center p-8 max-w-2xl">
        <Bounce>
          <div className="mb-8 relative w-32 h-32 mx-auto">
            <Image
              src="/payment-5.webp"
              alt="Success"
              fill
              className="object-contain"
            />
          </div>
        </Bounce>
        <Fade cascade damping={0.2}>
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Order Placed Successfully! 🎉
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase! We're preparing your order with care.
            You'll receive a confirmation email shortly.
          </p>
          <div className="space-y-4">
            <div className="animate-pulse bg-green-100 rounded-lg p-4">
              <p className="text-green-800">
                Redirecting you to homepage in 3 seconds...
              </p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Continue Shopping
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}
