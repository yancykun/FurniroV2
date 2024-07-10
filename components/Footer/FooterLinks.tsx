import Link from 'next/link';
import { navigationLinks, help } from '../../constants/index';

const FooterLinks = () => {
    return (
        <div className="mb-0 flex flex-col justify-between gap-0 sm:flex-row lg:mb-[40px] lg:gap-10">
            <div>
                <p className="mb-[40px] text-center text-base text-color-6 sm:text-start lg:mb-[50px]">
                    Links
                </p>
                {navigationLinks.map((item, index) => (
                    <Link
                        key={item.id}
                        className={`mb-[40px] block text-center text-base font-bold lg:mb-[50px] lg:flex sm:text-start${
                            index === navigationLinks.length - 1
                                ? 'mb-0 sm:text-start'
                                : ''
                        }`}
                        href={item.url}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <div>
                <p className="mb-[40px] text-center text-base text-color-6 sm:text-start lg:mb-[50px]">
                    Help
                </p>
                {help.map((item, index) => (
                    <Link
                        key={item.id}
                        className={`mb-[40px] block text-center text-base font-bold sm:text-start lg:mb-[50px] lg:flex ${
                            index === help.length - 1 ? 'mb-0' : ''
                        }`}
                        href={item.url}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterLinks;
