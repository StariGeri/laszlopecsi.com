import Image from 'next/image';
import Button from '../shared/Button';

const About = () => {
    return (
        <div className="w-full max-w-[1240px] lg:mx-auto my-8 md:my-12 lg:my-24 flex flex-col sm:flex-row gap-4 lg:gap-5 z-0 bg-background">
            <div className='font-body text-base md:text-[20px] lg:text-[24px] sm:w-4/5 md:w-3/5 leading-snug'>
                Welcome to the website dedicated to the artistic legacy of Laszlo Pecsi, a celebrated textile artist of the 20th century. Laszlo&apos;s work is a testament to his creative brilliance, and his unique approach to textile artistry has left a mark on the art world.
                <br />Here you&apos;ll discover a diverse range of his masterpieces. Our mission is to share his work with art enthusiasts and collectors, and we&apos;re pleased to offer these remarkable pieces for sale.
                <br />The collection is owned by Laszlo&apos;s two granddaughters, who are committed to preserving his legacy and sharing his creations with the world.
                <br />We invite you to explore the beauty and history of Laszlo&apos;s art and consider becoming a part of its next chapter.
                <div className='mt-2 md:mt-4 lg:mt-8 w-fit ml-auto'>
                    <Button buttonText='About the Artist' color='dark' isOutlined={false} href='/artist' />
                </div>
            </div>
            <div className='mx-auto'>
                <div className='relative flex justify-center items-center group'>
                    <Image src="/assets/images/laszlopecsiabout.png" width={500} height={500} alt='Portrait of Laszlo Pecsi' className='h-full w-auto max-h-[340px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[520px] z-[2]' />
                    <div className='absolute inset-0 bg-transparent border border-primaryOrange z-[1] translate-x-4 translate-y-4 md:translate-x-4 md:translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 duration-200 ease-in-out'></div>
                </div>
            </div>
        </div>
    );
}

export default About;
