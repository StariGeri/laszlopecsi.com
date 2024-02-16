
interface AvailableTextProps {
    isAvailable: boolean;
}

const AvailableText = ({ isAvailable }: AvailableTextProps) => {

    return (
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${isAvailable ? 'bg-[#588157]' : 'bg-[#E63946]'}`}></div>
            <p className="font-body font-normal text-sm md:text-base lg:text-xl">{isAvailable ? 'Available' : 'Sold'}</p>
        </div>
    );

};

export default AvailableText;