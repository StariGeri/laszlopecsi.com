import { HiChevronUp } from "react-icons/hi2";

import { useScroll } from '@/hooks/useScroll';

const ScrollToTop = () => {

    const { scrollToTop, isVisible } = useScroll();

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 ${isVisible ? 'block' : 'hidden'} bg-primaryOrange text-white p-2 rounded`}
            aria-label="Scroll to top"
        >
            <HiChevronUp className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTop;
