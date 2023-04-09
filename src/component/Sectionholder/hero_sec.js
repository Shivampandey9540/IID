import React from "react";

function hero_sec() {
  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
            {/* <!-- content - start --> */}
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                Online Digital Marketing Course with Certificate & Placements
              </p>

              <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-[20px] md:mb-12 md:text-2xl">
                India’s best Online Digital Marketing Course taught by industry
                experts in a comprehensive and question-oriented format.
              </h1>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <button className="btn bg-[#6875f5] text-[#fff] focuse:outline-0 outline-0 border-0">
                  Download Brochure
                </button>

                <a
                  href="/"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>

            <div className="h-48 overflow-hidden rounded-lg bg-gray-100  lg:h-96 xl:w-5/12">
              <img
                src="https://iide.co/wp-content/w3-webp/uploads/2023/02/UG-banner-image_.pngw3.webp"
                loading="lazy"
                alt=" Fakurian Design"
                className="h-full w-full object-contain object-center"
              />
            </div>
            {/* <!-- image - end --> */}
          </section>

          <section className="flex flex-col items-center justify-center gap-10 border-t pt-8 lg:flex-row lg:gap-8">
            {/* <!-- stats - start --> */}
            <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  1,00,000+
                </span>
                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  Students Trained
                </span>
              </div>

              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  100%
                </span>
                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  Placement Assistance
                </span>
              </div>

              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  Apr 11, 2023
                </span>
                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  Start Date
                </span>
              </div>

              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  7:00 PM – 9:00 PM
                </span>
                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  Lecture Timings (IST)
                </span>
              </div>
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  0%
                </span>
                <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  EMI avaiable
                </span>
              </div>
            </div>
            {/* <!-- stats - end --> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default hero_sec;
