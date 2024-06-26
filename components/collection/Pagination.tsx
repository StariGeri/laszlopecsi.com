
// Icons
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-5 md:gap-7 my-8 md:my-12 lg:my-24">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 mx-1 rounded text-lg ${currentPage === 1 ? 'text-gray-300' : 'text-gray-700 hover:text-black'}`}
                    >
                        <HiOutlineChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                    </button>

                    <h3 className='font-body text-xl md:text-2xl'>{currentPage} of {totalPages}</h3>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 mx-1 rounded text-lg ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-700 hover:text-black'}`}
                    >
                        <HiOutlineChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                    </button>
                </div>
            )}
        </>
    );
};
export default Pagination;