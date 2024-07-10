import Section from '../Layout/Section';
import CategoryCard from './CategoryCard';

const Category = () => {
    return (
        <Section
            id="categories"
            className="flex w-full flex-col items-center px-[1.5rem] xl:px-[7.5rem]"
        >
            <div className="mb-[35px]">
                <h2 className="h2 mb-[1.5rem] text-center">
                    Browse Our Exclusive Collections
                </h2>
                <p className="text-center text-base text-color-6 md:max-w-xl md:text-[1.25rem]">
                    Dive into our curated categories and transform your house
                    into a sanctuary of comfort and beauty.
                </p>
            </div>
            <CategoryCard />
        </Section>
    );
};

export default Category;
