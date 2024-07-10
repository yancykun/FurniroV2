import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/full-logo.png';

const Logo = () => {
    return (
        <Link href="/">
            <Image width={185} height={185} src={logo} alt="Logo" priority />
        </Link>
    );
};

export default Logo;
