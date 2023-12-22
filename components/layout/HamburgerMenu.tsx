interface HamburgerMenuProps {
    onClick: () => void;
    isOpen: boolean;
}

const HamburgerMenu = ({ onClick, isOpen }: HamburgerMenuProps) => {
    return (
        <div className="flex md:hidden flex-col items-center justify-center cursor-pointer z-30" onClick={onClick}>
            <div className={`w-7 h-[2px] bg-black mb-1 ${isOpen ? 'translate-y-1 rotate-45' : 'rotate-0'} transition-transform duration-300`}></div>
            <div className={`w-7 h-[2px] bg-black mb-1 ${isOpen ? '-translate-y-[2px] -rotate-45' : 'rotate-0'} transition-transform duration-300`}></div>
        </div>
    );
}

export default HamburgerMenu;

