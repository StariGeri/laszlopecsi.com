import Image from 'next/image';
import Link from 'next/link';

import { ArtModel } from '@/types/ArtModel';
import AvailableText from './AvailableText';


const ArtCard = ({ art }: { art: ArtModel }) => {

    const zAxis = `${art.dimensions.z ? `x ${art.dimensions.z}` : ''}`;

    return (
        <div className='w-full h-[300px] md:h-[390px] lg:h-[420px] xl:h-[470px] flex flex-col mx-auto shadow hover:shadow-lg transition-all duration-200'>
            <div className='imageContainer w-full h-2/3 bg-black bg-opacity-5 aspect-square'>
                <Link href={`/collection/${art.id}`}>
                    <Image src={art.images[0]} alt='Artwork of Laszlo Pecsi' width={400} height={400} className='h-full w-full object-contain mx-auto' />
                </Link>
            </div>

            <div className='contentContainer w-full h-1/3 flex flex-col p-2 md:p-3 lg:p-4'>
                <h1 className='font-body font-semibold text-lg md:text-xl lg:text-[26px]'>{art.title}</h1>
                <p className='italic font-body font-medium text-base md:text-lg lg:text-[20px]'>{art.year ? art.year : 'Unknown'}</p>
                <div className='w-full flex items-center justify-end sm:justify-between mt-auto'>
                    <p className='font-normal font-body text-sm md:text-base lg:text-xl hidden sm:flex'>{art.dimensions.x} x {art.dimensions.y} {zAxis}  cm</p>
                    <AvailableText isAvailable={art.isAvailable} />
                </div>
            </div>
        </div>
    );
};

export default ArtCard;