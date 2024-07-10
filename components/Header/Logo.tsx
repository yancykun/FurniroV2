import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/">
            <Image
                width={185}
                height={185}
                src="/assets/images/full-logo.png"
                className="w-185 h-185"
                alt="Logo"
                priority
            />
        </Link>
    );
};

export default Logo;
