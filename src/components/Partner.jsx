import React from 'react';
import image1 from '../images/patnerimages/Arka Parfume.png';
import image2 from '../images/patnerimages/FEB UISU.jpg';
import image3 from '../images/patnerimages/Poppin Coffee.png';
import image4 from '../images/patnerimages/Pro Property.png';

const Partner = () => {
  return (
    <section className="py-10 bg-patner">
    <div className='bg-patner-overlay'> </div>
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-8 ">
        <img
          src={image1}
          alt="Arka Parfume"
          className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
        />
        <img
          src={image2}
          alt="FEB UISU"
          className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
        />
        <img
          src={image3}
          alt="Poppin Coffee"
          className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
        />
        <img
          src={image4}
          alt="Pro Property"
          className="h-16 w-auto md:h-20  grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:brightness-75"
        />
      </div>
      
    </section>
  );
};

export default Partner;
