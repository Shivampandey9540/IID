import React from "react";
function Presentation() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div class="md:pt-8">
              <p class="text-center font-bold text-indigo-500 md:text-left">
                Where Are we
              </p>

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Presentations at IIDE’s Mumbai Campus
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                As a part of our hybrid learning model, we offer students the
                opportunity to present their final projects offline at IIDE’s
                Mumbai Campus in front of industry experts.
                <a
                  href="/"
                  class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  random
                </a>
                <br />
                This way students can improve their communication and
                presentation skills and also learn the art of public speaking.
              </p>

              <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                Note:
              </h2>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                in case you don’t wish to travel to Mumbai, you do have the
                choice to present online.
              </p>
            </div>
            <div className="h-[100%]">
              <div class="h-[100%] overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                <iframe
                  width="100%"
                  height="100%"
                  class=" inset-0"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                  // src="https://www.google.com/maps/place/IIDE+-+Digital+Marketing+Courses/@19.1170881,72.8426529,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c90e479ebd75:0xe38c763fe4b000c2!8m2!3d19.117083!4d72.8448416!16s%2Fg%2F11cmy42cgr"
                  src="https://maps.google.com/maps?width=50%&amp;height=50&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
