import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    theme: string;
    isFull: boolean;
}

const Logo = ({ theme, isFull }: LogoProps) => {

    const logo = theme === 'dark' ? '/assets/logos/darkLogo.svg' : '/assets/logos/lightLogo.svg';

    return (
        <Link href='/' className='z-40' passHref>
            <div className='flex items-center justify-center cursor-pointer'>
                <Image src={logo} alt="Logo" width={200} height={200} className='w-8 h-8 md:w-10 md:h-10' />
                {isFull &&
                    <div className={`hidden md:flex flex-col ml-3 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
                        <h1 className='hidden md:block font-body font-semibold md:text-[20px] lg:text-[26px] leading-none'>Laszlo Pecsi</h1>
                        <p className='font-body font-normal md:text-[16px] lg:text-[20px] leading-none'>Art Collection</p>
                    </div>
                }
            </div>
        </Link>
    );
};

export default Logo;