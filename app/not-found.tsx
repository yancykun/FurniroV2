import Image from 'next/image';

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center">
            <Image
                className="h-[100vh]"
                height={1000}
                width={1000}
                src="/assets/images/pageNotFound.jpg"
                alt="Page not found image"
            />
        </div>
    );
};

export default PageNotFound;
