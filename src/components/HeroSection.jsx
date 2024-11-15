import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import backgroundImage from '../images/bg.jpg';
import americanAirlinesLogo from '../images/flyer 1.png';
import logoijo from '../images/Logo Hijau.png';
import cardImage1 from '../images/4.jpg';
import cardImage2 from '../images/2.jpg';
import cardImage3 from '../images/1.jpg';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-70"></div>

      <div className="relative container mx-auto py-20 px-5 flex flex-col items-center lg:items-center lg:flex-row lg:justify-between">
        {/* Bagian Teks dan Logo */}
        <div className="flex flex-col items-center w-full lg:w-2/3 mb-10 lg:mb-0 lg:items-start">
          <div className="text-center lg:text-left text-white lg:ml-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
              COME <span className="text-green-300">JOIN</span> US
            </h1>
            <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
              <span className="text-green-300">A</span> RELAUNCHING
            </h3>
            <img src={logoijo} alt="American Airlines" className="mt-4 w-48 mx-auto lg:mx-0" />
          </div>
        </div>

        {/* Logo Besar di Kanan Teks */}
        <div className="w-full flex justify-center lg:w-1/3 lg:justify-center lg:mr-10">
          <img
            src={americanAirlinesLogo}
            alt="American Airlines"
            className="w-35 md:w-43 lg:w-63 xl:w-83 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
          />
        </div>
      </div>

      {/* Swiper Carousel Section */}
      <div className="container mx-auto mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={cardImage1} alt="Single Game Tickets" className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold">Single Game Tickets</h2>
                <p className="mt-2 text-gray-700">Tickets on sale NOW!</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={cardImage2} alt="Season Tickets" className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold">Season Tickets</h2>
                <p className="mt-2 text-gray-700">Join the waitlist for season memberships!</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={cardImage3} alt="Theme Nights" className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold">Theme Nights</h2>
                <p className="mt-2 text-gray-700">Celebrate diversity at theme nights!</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Tambahan Slide */}
          <SwiperSlide>
            <div className="bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={cardImage3} alt="Exclusive Offers" className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold">Exclusive Offers</h2>
                <p className="mt-2 text-gray-700">Don't miss out on our special deals!</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                  Discover More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
