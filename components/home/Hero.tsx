"use client";

import { Rock_Salt } from "next/font/google";
import Image from "next/image";
import { Boxes } from "../ui/background-boxes";
import { Button } from "../ui/button";
import Title from "../Title";
import { FlipWordsDemo } from "../FlipWordsDemo";

const sacramento = Rock_Salt({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <>
      <div className='h-[30rem] relative w-full overflow-hidden dark:bg-gray-950 flex flex-col items-center justify-center pt-12'>
        <div className='absolute inset-0 w-full h-full bg-gray-100 dark:bg-gray-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />

        <Boxes />

        <div className='z-30 grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-4 lg:mx-8 max-w-5xl mx-auto'>
          <div className='text-center md:text-start'>
            <Title
              text='Volks Rental Services.'
              classnames='text-4xl sm:text-5xl lg:text-6xl font-bold'
            />
           
           <FlipWordsDemo />
          </div>
          <div className='flex items-center justify-center'>
            <Image
              alt=''
              src='/cars/car_home.png'
              width={470}
              height={250}
              className='w-[520px] aspect-video shrink-0'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
