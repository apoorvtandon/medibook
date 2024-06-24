import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';

const About = () => {
  return (
    <section className="container">
      <div className='flex items-center justify-between gap-[80px] lg:gap[130px] xl:gap-20 flex-col lg:flex-row'>
        {/* Left Section with Images */}
        <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
          <img src={aboutImg} alt="About Image" />
          <div  className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
            <img src={aboutCardImg} alt="About Card Image" />
          </div>
        </div>

        {/* Right Section with Text Content */}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">
            Proud to be on one of the Nation's Best
          </h2>
          <p className="text__para ">
          Lorem ipsum dolor sit amet, consectetur aex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </p>
          <p className='text__para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm   commodo consequat. Duis aute irure dolor in reprehenderit in

          </p>
          <Link to="/" className="inline-block">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
