import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-6 py-[30px] px-[20px]">
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Shirts
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                href="/all-products?cat=Clothing"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      <h2 className="my-[20px] text-[30px] text-orange-500 p-[20px] font-extrabold">
        OUR HISTORY
      </h2>
      <div className="flex items-start gap-5 md:flex-row flex-col">
        <div className="basis-[60%] flex flex-col gap-2 ">
          <a href="#" className="group relative block bg-black rounded-xl">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Tony Wayne
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]  ">
            <div className="rounded-[10px]  p-4 !pt-20 sm:p-6">
              <time
                dateTime="2023-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                10th Oct 2023{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Start Our Store
                </h3>
              </a>

              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Ecommerce
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Store
                </span>
              </div>
            </div>
          </article>
        </div>
        <div className="basis-[35%] flex flex-col gap-4">
          <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]  ">
            <div className="rounded-[10px]  p-4 !pt-20 sm:p-6">
              <time
                dateTime="2023-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                10th Oct 2023{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Start Our Store
                </h3>
              </a>

              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Ecommerce
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Store
                </span>
              </div>
            </div>
          </article>
          <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]  ">
            <div className="rounded-[10px]  p-4 !pt-20 sm:p-6">
              <time
                dateTime="2023-4-14"
                className="block text-xs text-gray-500"
              >
                {" "}
                14th APR 2024{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  How to Manage Our Projects .
                </h3>
              </a>

              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Management
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Story
                </span>
              </div>
            </div>
          </article>
          <article className="hover:animate-background rounded-xl  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ">
            <div className="rounded-[10px]  p-4 !pt-20 sm:p-6">
              <time
                dateTime="2024-10-3"
                className="block text-xs text-gray-500"
              >
                {" "}
                3rd Oct 2024{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  We Got Our First 3,000 Customer
                </h3>
              </a>

              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Achevment
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Stars
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Record
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
