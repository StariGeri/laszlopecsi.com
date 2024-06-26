import { AnimatePresence } from "framer-motion";
import Logo from "../shared/Logo";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import { useHeader } from "@/hooks/useHeader";

const Header = () => {

    const { isMobileMenuOpen, setIsMobileMenuOpen, isScrolled, handleMobileMenu } = useHeader();

    return (
        <div className={`fixed w-full px-3 md:px-5 z-20 ${isScrolled && 'bg-opacity-50 backdrop-filter backdrop-blur-md'}`}>
            <div className={`w-full max-w-[1240px] mx-auto flex items-center justify-between py-4 ${isScrolled ? 'border-none' : 'border-b border-black'}`}>
                <Logo theme="dark" isFull />
                <NavItems />
                <HamburgerMenu onClick={handleMobileMenu} isOpen={isMobileMenuOpen} />
                <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (<MobileNav setIsMobileMenuOpen={setIsMobileMenuOpen} />) : null}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Header;