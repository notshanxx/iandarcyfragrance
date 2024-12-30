import { NavLink } from "react-router";
export default function Banner() {
  return (
    <section className="relative bg-[url(/Mens.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1
            className="text-3xl font-extrabold sm:text-5xl"
            data-aos="fade-up"
          >
            Your Everyday
            <strong
              className="block font-extrabold text-white"
              data-aos="fade-right"
            >
              {" "}
              Signature Perfume.{" "}
            </strong>
          </h1>

          <p
            className="mt-4 max-w-lg sm:text-xl/relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Oil-Rich Fragrance Collections. Eau De Parfum imported from France
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              data-aos="fade-up"
              data-aos-delay="300"
              href="#products"
              className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              See Products
            </a>

            <NavLink
              to="/about"
              data-aos="fade-up"
              data-aos-delay="350"
              className="block w-full rounded bg-white hover:bg-black px-12 py-3 text-sm font-medium text-black hover:text-white shadow focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
