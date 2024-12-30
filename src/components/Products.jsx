export default function Products() {
  return (
    <section id="products">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center py-9">
          <h2
            className="text-xl font-bold text-gray-900 sm:text-3xl"
            data-aos="fade-up"
          >
            Product Collection
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500" data-aos="fade-up">
            Have a signature perfume that&apos;s uniquely yours. Try our
            selection of our exclusive scents
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#iandarcy-men" className="group block overflow-hidden">
              <img
                data-aos="fade-up"
                src="/Mens.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3" data-aos="fade-left">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  For MEN -100ml
                </h3>

                <p className="mt-2" data-aos="fade-left">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    &#x20B1; 400{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#iandarcy-women" className="group block overflow-hidden">
              <img
                data-aos="fade-down"
                src="/Womens.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3" data-aos="fade-up">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  For WOMEN - 100ml
                </h3>

                <p className="mt-2" data-aos="fade-up">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    &#x20B1; 400{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#littledarcy" className="group block overflow-hidden">
              <img
                data-aos="fade-left"
                src="/Cologne.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3" data-aos="fade-right">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Little Darcy - 150ml
                </h3>

                <p className="mt-2" data-aos="fade-right">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    &#x20B1; 100{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
