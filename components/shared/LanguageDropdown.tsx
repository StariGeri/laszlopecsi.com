import { useLanguageDropdown } from "@/hooks/useLanguageDropdown";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

const LanguageDropdown = () => {

    const { isOpen, toggleDropdown, dropdownRef, locale, locales } = useLanguageDropdown();

    return (
        <div className="relative" ref={dropdownRef}>
            <button className="flex items-center" onClick={toggleDropdown}>
                <h1 className="uppercase font-body font-medium text-[24px] sm:text-[40px] md:text-[18px] lg:text-[20px] md:pl-4 text-black w-fit">{locale}</h1>
                <HiChevronDown className={`text-blac opacity-80 w-6 h-6 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded shadow py-1">
                    <ul className="font-body font-medium text-[24px] sm:text-[40px] md:text-[18px] lg:text-[20px]">
                        {/* Languages*/}
                        {locales?.map((l) => (
                            <Link href='/' locale={l} onClick={toggleDropdown} key={l}>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{l}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default LanguageDropdown;
