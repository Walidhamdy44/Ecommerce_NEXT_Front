const Status = () => {
  return (
    <section className="bg-whitel">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold  sm:text-4xl">
            Trusted by eCommerce Lo
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-orange-400 shadow-xl px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-white">
                Total Sales
              </dt>

              <dd className="text-4xl font-extrabold text-white md:text-5xl">
                $1.7m
              </dd>
            </div>

            <div className="flex flex-col rounded-lg  bg-lime-400 shadow-2xl px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-white">
                Our Customer
              </dt>

              <dd className="text-4xl font-extrabold text-white md:text-5xl">
                107,000
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-teal-400 shadow-2xl px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-white">
                Years Of Experience
              </dt>

              <dd className="text-4xl font-extrabold text-white md:text-5xl">
                11
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Status;
