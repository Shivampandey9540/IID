import React from "react";

function market() {
  return (
    <div>
      <section class="text-gray-600 body-font bg-[#fff]">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Online Digital Marketing Course Overview
          </h2>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base">
              As we head towards the digital age, the need for digital marketers
              who can market/sell online has grown exponentially. That is where
              a digital marketing course comes into the picture.
              <br />
              Unlike a traditional degree, you just need to invest 4-6 months in
              a digital marketing course online, get certified & enter the job
              market confidently. And you know what the best part is?
            </p>
            <div class="flex md:mt-4 mt-6">
              {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button> */}
              <a class="text-indigo-500 inline-flex items-center ml-4" href="/">
                read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default market;
