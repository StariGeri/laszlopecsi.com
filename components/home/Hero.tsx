// components/HeroSection.tsx
import Image from 'next/image';
import React from 'react';

import Button from '../shared/Button';
import FacebookIcon from '../shared/FacebookIcon';
import InstagramIcon from '../shared/InstagramIcon';
import Blob from '@/components/shared/Blob';

const HeroSection = () => {

  return (
    <div className="relative w-full max-w-[1240px] lg:mx-auto xl:grid xl:grid-cols-3 mt-2 md:mt-4 lg:mt-8 md:gap-6 lg:gap-8 xl:gap-10">
      <div className='flex flex-col justify-between'>
        <h1 className='font-header font-semibold text-[26px] md:text-[35px] lg:text-[40px] text-balance leading-tight sm:text-center lg:text-left mb-2 md:mb-5 lg:mb-7'>The Art Collection of <span className='text-primaryOrange'>Laszlo Pecsi</span></h1>
        <p className='font-body font-normal text-base md:text-[20px] lg:text-[24px] sm:text-center lg:text-left text-pretty leading-snug'>A Journey Through Time and Texture: Exploring the Artistic Legacy of Laszlo Pecsi,
          a Renowned Textile Artist of the 20th Century, and the Exclusive Opportunity to Acquire his Masterpieces
        </p>
        <Blob className='flex xl:hidden absolute top-12 -left-10 sm:top-10 sm:left-0 -z-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] blur-lg' fillOpacity='0.15' />
        <div className='w-fit my-3 md:my-4 lg:my-6 ml-auto sm:mx-auto lg:mx-0 lg:ml-auto'>
          <Button buttonText='Learn More' color='dark' isOutlined={false} href='/artist' />
        </div>
      </div>
      <Blob className='hidden xl:flex absolute top-0 right-0 -z-10 lg:w-[600px] lg:h-[600px] blur-lg' />
      <Image src='/dummy/test3.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-full md:max-h-[400px] w-auto xl:w-full xl:aspect-square object-cover xl:rounded-br-md hidden xl:block' />
      <Image src='/dummy/test5.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-full md:max-h-[400px] w-auto xl:w-full xl:aspect-square object-cover xl:rounded-bl-md hidden xl:block' />
      <div className='xl:flex xl:items-end xl:gap-5 xl:pr-10'>
        <div className='hidden xl:flex flex-col items-center justify-center gap-3'>
          <FacebookIcon color='light' isOutlined={false} />
          <InstagramIcon color='light' isOutlined={false} />
          <div className='h-[76px] w-[2px] bg-black'></div>
        </div>
        <Image src='/dummy/test2.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-full md:max-h-[400px] w-auto object-cover hidden xl:block' />
      </div>
      <Image src='/dummy/test1.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-full md:max-h-[400px] w-auto xl:w-full xl:aspect-square object-cover hidden xl:block' />
      <Image src='/dummy/test4.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-full md:max-h-[400px] w-auto xl:w-full xl:aspect-square object-cover hidden xl:block' />
      {/**MOBILE - TABLET - SMALL LAPTOP */}
      <div className='relative w-screen flex xl:hidden gap-3 overflow-x-scroll'>
        <Image src='/dummy/test3.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-auto object-cover' />
        <Image src='/dummy/test5.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-auto object-cover' />
        <Image src='/dummy/test2.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-auto object-cover' />
        <Image src='/dummy/test1.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-auto object-cover' />
        <Image src='/dummy/test4.JPG' alt='Artwork of Laszlo Pecsi' width={250} height={340} className='h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-auto object-cover' />
      </div>
    </div>
  );
};

export default HeroSection;
