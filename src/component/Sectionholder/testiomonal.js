import React from "react";
import Slider from "react-slick";
function Testiomonal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            What others say about us
          </h2>

          <div class=" gap-4 md:grid-cols-1 md:gap-8">
            {/* <!-- quote - start --> */}

            <Slider {...settings}>
              <div class="flex flex-col items-center gap-4 w90 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
                <div class="max-w-md text-center text-white lg:text-lg">
                  “This is a section of some simple filler text, also known as
                  placeholder text.”
                </div>
                <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <img
                      src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                      loading="lazy"
                      alt=" Radu Florin"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                      John McCulling
                    </div>
                    <p class="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                      CEO / Datadrift
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- quote - end --> */}

              {/* <!-- quote - start --> */}
              <div class="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
                <div class="max-w-md text-center text-white lg:text-lg">
                  “This is a section of some simple filler text, also known as
                  placeholder text.”
                </div>

                <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <img
                      src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                      loading="lazy"
                      alt=" christian ferrer"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                      Kate Berg
                    </div>
                    <p class="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                      CFO / Dashdash
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center gap-4  w90  rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
                <div class="max-w-md text-center text-white lg:text-lg">
                  “This is a section of some simple filler text, also known as
                  placeholder text.”
                </div>

                <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <img
                      src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                      loading="lazy"
                      alt=" christian ferrer"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                      Kate Berg
                    </div>
                    <p class="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                      CFO / Dashdash
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center gap-4 w90  rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
                <div class="max-w-md text-center text-white lg:text-lg">
                  “This is a section of some simple filler text, also known as
                  placeholder text.”
                </div>

                <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <img
                      src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                      loading="lazy"
                      alt=" christian ferrer"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                      Kate Berg
                    </div>
                    <p class="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                      CFO / Dashdash
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- quote - end --> */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testiomonal;
