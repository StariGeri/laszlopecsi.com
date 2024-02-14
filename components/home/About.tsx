import Image from 'next/image';
import Button from '../shared/Button';

const About = () => {

    return (
        <div className="w-full max-w-[1240px] lg:mx-auto my-4 md:my-8 lg:my-24 flex flex-col md:flex-row gap-4 lg:gap-5">
            <div className='font-body text-base md:text-[20px] lg:text-[24px] md:w-3/5 leading-snug'>
                Welcome to the website dedicated to the artistic legacy of Laszlo Pecsi, a celebrated textile artist of the 20th century. Laszlo's work is a testament to his creative brilliance, and his unique approach to textile artistry has left a mark on the art world.
                <br />Here you'll discover a diverse range of his masterpieces. Our mission is to share his work with art enthusiasts and collectors, and we're pleased to offer these remarkable pieces for sale.
                <br />The collection is owned by Laszlo's two granddaughters, who are committed to preserving his legacy and sharing his creations with the world.
                <br />We invite you to explore the beauty and history of Laszlo's art and consider becoming a part of its next chapter.
                <div  className='mt-2 md:mt-4 lg:mt-8 w-fit ml-auto'>
                    <Button buttonText='About the Artist' color='dark' isOutlined={false} href='/artist' />
                </div>
            </div>
            <div className='relative md:w-2/5 mx-auto group'>
                <Image src="/assets/images/laszlopecsiabout.png" width={400} height={400} alt='Portrait of Laszlo Pecsi' className='h-full w-auto md:max-h-[450px] lg:max-h-[520px] relative z-[2]' />
                <div className='absolute top-4 left-4 lg:top-7 lg:left-7 h-full w-full max-h-[520px] max-w-[313px] bg-transparent border border-primaryOrange z-0 group-hover:translate-x-2 group-hover:translate-y-2 duration-200 ease-in-out'></div>
            </div>
        </div>
    );

}

export default About;