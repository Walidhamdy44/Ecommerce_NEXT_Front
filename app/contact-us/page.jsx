"use client";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.option &&
      formData.message
    ) {
      // Form is valid, redirect the user to "/"
      router.push("/");
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 text-whitel">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-pink-600">
                {" "}
                01144706724{" "}
              </a>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg  p-8 shadow-2xl lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Option1"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3  hover:border-black has-[:checked]:border-black has-[:checked]:bg-black text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                      value="Option1"
                      onChange={handleChange}
                    />

                    <span className="text-sm"> ❌😶</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                      value="Option2"
                      onChange={handleChange}
                    />

                    <span className="text-sm"> 😊👌 </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                      value="Option3"
                      onChange={handleChange}
                    />

                    <span className="text-sm"> 🤸‍♂️❤ </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
