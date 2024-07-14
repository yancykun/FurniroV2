'use client';

import { useCarouselStore } from '@/store/useCarouselStore';
import Image from 'next/image';
import { inspiration } from '@/constants';
import { ChevronRight } from 'lucide-react';

const Carousel = () => {
    const { currentImage, nextButton } = useCarouselStore();

    return (
        <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative h-[400px] w-[380px] rounded-md bg-color-2 p-4 md:w-[605px] lg:h-[568px]">
                <div className="relative h-full w-full overflow-hidden">
                    {inspiration.map((item, index) => (
                        <Image
                            key={item.id}
                            className={`absolute h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
                                index === currentImage
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                            src={item.image}
                            alt="Beautiful room inspiration"
                            width={1000}
                            height={1000}
                        />
                    ))}

                    <button
                        className="absolute right-8 top-1/2 flex h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-color-1"
                        onClick={() => nextButton(inspiration.length)}
                    >
                        <ChevronRight color="#B88E2F" />
                    </button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                    {inspiration.map((_, index) => (
                        <div
                            key={index}
                            className={`${
                                index === currentImage
                                    ? 'border border-color-4'
                                    : 'border-none'
                            } rounded-full p-2`}
                        >
                            <div
                                className={`h-[13px] w-[13px] rounded-full ${
                                    index === currentImage
                                        ? 'bg-color-4'
                                        : 'bg-color-6'
                                }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
