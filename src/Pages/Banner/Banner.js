import React from 'react';
import circle from '../../assets/images/circle.svg'
import bottom from '../../assets/images/bottom.jpg'
import front from '../../assets/images/front.jpg'

const Banner = () => {
    return (
        <div className='ml-5 mr-5 mt-16'>
<section class="relative overflow-hidden">
  <img class="absolute md:top-72 right-48 h-96 md:h-auto ml-28" src={circle} alt=""/>
  <div class="md:absolute top-0 left-0 md:w-1/3 lg:w-2/5 h-full">
    <img class="h-50 md:h-full w-full md:w-auto container" src={front} alt=""/>
    <img class="md:absolute bottom-0 left-0 md:ml-12 lg:ml-32 h-50 md:h-5/6 w-full md:w-auto object-cover object-left container" src={bottom} alt=""/>
  </div>
  <div class="relative container px-4 mx-auto">
    <div class="w-full md:w-1/2 lg:w-2/5 ml-auto py-24 md:py-40">
      <h1 class="mb-10 text-8xl md:text-9xl leading-tight font-heading font-medium">Need <br></br> Parts?</h1>
      <p class="mb-14 md:mb-32 text-darkBlueGray-400 text-3xl">You are at the perfect place</p>
      <a class="inline-block py-4 px-10 text-xl leading-8 text-white font-heading font-medium tracking-tighter text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl" href="#parts">Shop now</a>
    </div>
  </div>
</section>
</div>
    );
};

export default Banner;