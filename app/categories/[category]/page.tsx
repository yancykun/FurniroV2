import CategoryShowcase from '@/components/Category/CategoryShowcase';
import Features from '@/components/Features/Features';
import ExtendedHeader from '@/components/Header/ExtendedHeader';

const CategoriesPage = () => {
    return (
        <>
            <ExtendedHeader
                customTitle="Categories"
                customSubtitle="Categories"
            />
            <CategoryShowcase />
            <Features />
        </>
    );
};

export default CategoriesPage;
