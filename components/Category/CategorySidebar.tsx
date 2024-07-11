'use client';

import { categories } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategorySidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex w-[200px] flex-col">
            <div className="flex flex-col gap-4 pl-4 pt-4">
                <h5 className="mb-1 text-[1.5rem] font-semibold">Categories</h5>
                {categories.map((item) => (
                    <Link
                        href={item.url}
                        key={item.id}
                        className={`pl-2 text-base ${item.url === pathname ? 'z-2 text-color-4' : 'text-color-7'}`}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategorySidebar;
