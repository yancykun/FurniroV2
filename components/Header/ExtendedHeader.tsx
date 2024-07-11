import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

type ExtendedHeaderProps = {
    customTitle: string;
    customSubtitle: string;
};

const ExtendedHeader = ({
    customTitle,
    customSubtitle,
}: ExtendedHeaderProps) => {
    return (
        <div className="relative mb-[50px] w-full pt-[3.5rem] md:pt-[5rem] lg:mb-[60px]">
            <div className="relative">
                <Image
                    className="h-[310px] w-full object-cover opacity-40"
                    src="/assets/images/extendedHeaderImage.jpg"
                    alt="Header image"
                    height={310}
                    width={310}
                />

                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-center">
                    <Image
                        className="mb-4"
                        src="/assets/images/logo.png"
                        alt="Furniro logo"
                        width={40}
                        height={40}
                    />
                    <p className="h1 mb-3">{customTitle}</p>

                    <div className="flex items-center justify-center gap-4">
                        <p className="font-light">Home</p>
                        <ChevronRight size={24} />
                        <p className="font-semibold">{customSubtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtendedHeader;
