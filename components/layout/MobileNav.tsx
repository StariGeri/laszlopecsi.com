import { motion } from 'framer-motion';
import { menuItemVariants, menuContainerVariants } from '../animation/anim';
import Link from 'next/link';
import { useActiveLink } from '@/hooks/useActiveLink';
import FacebookIcon from '../shared/FacebookIcon';
import InstagramIcon from '../shared/InstagramIcon';
import LanguageDropdown from '../shared/LanguageDropdown';
import { TFunction } from 'next-i18next';

const MobileNav = () => {

    const { activeLink } = useActiveLink();

    return (
        <motion.div
            variants={menuContainerVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className='h-screen w-screen bg-background fixed right-0 top-0 shadow-lg'
        >
            <div className='box-border h-full p-[10px] flex flex-col justify-between'>
                <div className='h-full flex flex-col text-[22px] p-6 mt-8'>
                    <ul className="">
                        <motion.li
                            variants={menuItemVariants}
                            className={`uppercase font-body font-medium text-[24px] sm:text-[40px] py-4 sm:py-2 ${activeLink === '/en' || activeLink === '/' || activeLink === '/hu' ? 'text-primaryOrange' : 'text-black'}`}>
                            <Link href='/'>
                                <h1>"navHome"</h1>
                            </Link>
                        </motion.li>
                        <motion.li
                            variants={menuItemVariants}
                            className={`uppercase font-body font-medium text-[24px] sm:text-[40px] py-4 sm:py-2 ${activeLink === '/en/artist' || activeLink === '/hu/artist' ? 'text-primaryOrange' : 'text-black'}`}>
                            <Link href='/artist'>
                                <h1>"navArtist"</h1>
                            </Link>
                        </motion.li>
                        <motion.li
                            variants={menuItemVariants}
                            className={`uppercase font-body font-medium text-[24px] sm:text-[40px] py-4 sm:py-2 ${activeLink === '/en/collection' || activeLink === '/hu/collection' ? 'text-primaryOrange' : 'text-black'}`}>
                            <Link href='/collection' >
                                <h1>"navCollection"</h1>
                            </Link>
                        </motion.li>
                        <motion.li
                            variants={menuItemVariants}
                            className={`uppercase font-body font-medium text-[24px] sm:text-[40px] py-4 sm:py-2 ${activeLink === '/en/contact' || activeLink === '/hu/contact' ? 'text-primaryOrange' : 'text-black'}`}>
                            <Link href='/contact'>
                                <h1>"navContact"</h1>
                            </Link>
                        </motion.li>
                        <motion.li variants={menuItemVariants} className='mt-8'>
                            <LanguageDropdown />
                        </motion.li>
                    </ul>
                    <motion.div
                        className='socialIcons flex flex-col items-end justify-end gap-5 mt-auto mb-5'
                        variants={menuItemVariants}>
                        <FacebookIcon />
                        <InstagramIcon />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default MobileNav;