import React from "react";

function onlineDigital() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#fff]">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex  items-center  flex-col md:flex-row  w-full xl:flex-nowrap sm:flex-wrap">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4  gap-[20px]">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Term One
                  </h2>
                  <div tabIndex={0} className="collapse ">
                    <div className="collapse-title text-xl font-medium">
                      Modules cover
                    </div>
                    <div className="collapse-content">
                      <ul>
                        <li>Introduction to Digital Marketing</li>
                        <li>Search Engine Optimization</li>
                        <li>Key Performance Marketing Jargon</li>
                        <li>Search Engine Marketing</li>
                        <li>Campaign Planning </li>
                        <li>Presentation Making</li>
                        <li>Ecommerce</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-12 gap-[20px] ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Term One
                  </h2>
                  <div tabIndex={0} className="collapse ">
                    <div className="collapse-title text-xl font-medium">
                      Modules cover
                    </div>
                    <div className="collapse-content">
                      <ul className="">
                        <li>Content Strategy</li>
                        <li>Copywriting</li>
                        <li>Canva</li>
                        <li>Social Media Marketing Organic</li>
                        <li>ORM</li>
                        <li>Influencer Marketing</li>
                        <li>Resume Making</li>
                        <li>Interview Skills</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-12  gap-[20px] ">
                {/* <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div> */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Term One
                  </h2>
                  <div tabIndex={0} className="collapse ">
                    <div className="collapse-title text-xl font-medium">
                      Modules cover
                    </div>
                    <div className="collapse-content">
                      <ul>
                        <li>Social Media Marketing Paid</li>
                        <li>Social Analytics</li>
                        <li>Google Analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                  <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div class="flex items-center gap-12">
                      <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
                        Online Digital Marketing Course Syllabus
                      </h2>

                      <p class="hidden max-w-screen-sm text-gray-500 md:block">
                        Our hybrid digital marketing course is designed to teach
                        students the basics to the advanced level concepts of
                        digital marketing with practice assignments and offline
                        in-class projects.
                      </p>
                    </div>

                    <a
                      href="/"
                      class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                    >
                      More
                    </a>
                  </div>

                  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    {/* <!-- image - start --> */}
                    <a
                      href="/"
                      class="group relative flex items-center h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[9rem]"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Minh Pham"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        VR
                      </span>
                    </a>
                    {/* <!-- image - end --> */}

                    {/* <!-- image - start --> */}
                    <a
                      href="/"
                      class="group relative flex items-center h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-[9rem]"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                        loading="lazy"
                        alt=" Magicle"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        Tech
                      </span>
                    </a>
                    {/* <!-- image - end --> */}

                    {/* <!-- image - start --> */}
                    <a
                      href="/"
                      class="group relative flex items-center h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-[9rem]"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                        loading="lazy"
                        alt=" Martin Sanchez"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        Dev
                      </span>
                    </a>
                    {/* <!-- image - end --> */}

                    {/* <!-- image - start --> */}
                    <a
                      href="/"
                      class="group relative flex items-center h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[9rem]"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt=" Lorenzo Herrera"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                          Download Brochure
                        </button>
                      </span>
                    </a>
                    {/* <!-- image - end --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default onlineDigital;
